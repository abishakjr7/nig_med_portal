const http = require('http');
const url = require('url');
const { initDatabase } = require('./config/database');
const authController = require('./controllers/authController');
const jobController = require('./controllers/jobController');
const applicationController = require('./controllers/applicationController');

const PORT = process.env.PORT || 3001;

// Parse JSON body
const parseBody = (req) => {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        resolve({});
      }
    });
  });
};

// CORS middleware
const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
};

// Route handler
const handleRequest = async (req, res) => {
  setCorsHeaders(res);
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Parse body for POST/PUT requests
  if (method === 'POST' || method === 'PUT') {
    req.body = await parseBody(req);
  }

  try {
    // Auth routes
    if (path === '/api/auth/signup' && method === 'POST') {
      return await authController.signup(req, res);
    }
    
    if (path === '/api/auth/login' && method === 'POST') {
      return await authController.login(req, res);
    }

    // Job routes
    if (path === '/api/jobs' && method === 'GET') {
      return await jobController.getJobs(req, res);
    }
    
    if (path === '/api/jobs' && method === 'POST') {
      return await jobController.createJob(req, res);
    }
    
    if (path === '/api/jobs/my' && method === 'GET') {
      return await jobController.getMyJobs(req, res);
    }
    
    if (path.startsWith('/api/jobs/') && method === 'GET') {
      const jobId = path.split('/')[3];
      if (jobId && jobId !== 'my') {
        return await jobController.getJobById(req, res, jobId);
      }
    }

    // Application routes
    if (path === '/api/applications' && method === 'POST') {
      return await applicationController.applyForJob(req, res);
    }
    
    if (path === '/api/applications/my' && method === 'GET') {
      return await applicationController.getMyApplications(req, res);
    }
    
    if (path.startsWith('/api/jobs/') && path.endsWith('/applications') && method === 'GET') {
      const jobId = path.split('/')[3];
      return await applicationController.getJobApplications(req, res, jobId);
    }
    
    if (path.startsWith('/api/applications/') && method === 'PUT') {
      const applicationId = path.split('/')[3];
      return await applicationController.updateApplicationStatus(req, res, applicationId);
    }

    // 404 - Not Found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
    
  } catch (error) {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

// Start server
const startServer = async () => {
  await initDatabase();
  
  const server = http.createServer(handleRequest);
  
  server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 API available at http://localhost:${PORT}/api`);
  });
};

startServer().catch(console.error);