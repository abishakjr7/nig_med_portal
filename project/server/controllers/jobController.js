const { getPool } = require('../config/database');
const { authenticate } = require('../middleware/auth');

const createJob = async (req, res) => {
  const pool = getPool();
  if (!pool) {
    return res.writeHead(503, { 'Content-Type': 'application/json' }) &&
           res.end(JSON.stringify({ error: 'Database not available' }));
  }

  try {
    const user = authenticate(req);
    if (!user || user.role !== 'hospital') {
      return res.writeHead(401, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Unauthorized' }));
    }

    const { title, description, location, salary, requirements, benefits, employment_type, experience_level } = req.body;

    if (!title || !description || !location) {
      return res.writeHead(400, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Missing required fields' }));
    }

    const [result] = await pool.execute(
      `INSERT INTO jobs (hospital_id, title, description, location, salary, requirements, benefits, employment_type, experience_level) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [user.userId, title, description, location, salary, requirements, benefits, employment_type, experience_level]
    );

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Job created successfully',
      jobId: result.insertId
    }));
  } catch (error) {
    console.error('Create job error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

const getJobs = async (req, res) => {
  const pool = getPool();
  if (!pool) {
    return res.writeHead(503, { 'Content-Type': 'application/json' }) &&
           res.end(JSON.stringify({ error: 'Database not available' }));
  }

  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const search = url.searchParams.get('search') || '';
    const location = url.searchParams.get('location') || '';

    let query = `
      SELECT j.*, u.name as hospital_name 
      FROM jobs j 
      JOIN users u ON j.hospital_id = u.id 
      WHERE j.status = 'active'
    `;
    const params = [];

    if (search) {
      query += ` AND (j.title LIKE ? OR j.description LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`);
    }

    if (location) {
      query += ` AND j.location LIKE ?`;
      params.push(`%${location}%`);
    }

    query += ` ORDER BY j.created_at DESC`;

    const [jobs] = await pool.execute(query, params);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ jobs }));
  } catch (error) {
    console.error('Get jobs error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

const getJobById = async (req, res, jobId) => {
  const pool = getPool();
  if (!pool) {
    return res.writeHead(503, { 'Content-Type': 'application/json' }) &&
           res.end(JSON.stringify({ error: 'Database not available' }));
  }

  try {
    const [jobs] = await pool.execute(
      `SELECT j.*, u.name as hospital_name, u.email as hospital_email, u.location as hospital_location
       FROM jobs j 
       JOIN users u ON j.hospital_id = u.id 
       WHERE j.id = ?`,
      [jobId]
    );

    if (jobs.length === 0) {
      return res.writeHead(404, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Job not found' }));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ job: jobs[0] }));
  } catch (error) {
    console.error('Get job error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

const getMyJobs = async (req, res) => {
  const pool = getPool();
  if (!pool) {
    return res.writeHead(503, { 'Content-Type': 'application/json' }) &&
           res.end(JSON.stringify({ error: 'Database not available' }));
  }

  try {
    const user = authenticate(req);
    if (!user || user.role !== 'hospital') {
      return res.writeHead(401, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Unauthorized' }));
    }

    const [jobs] = await pool.execute(
      'SELECT * FROM jobs WHERE hospital_id = ? ORDER BY created_at DESC',
      [user.userId]
    );

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ jobs }));
  } catch (error) {
    console.error('Get my jobs error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

module.exports = {
  createJob,
  getJobs,
  getJobById,
  getMyJobs
};