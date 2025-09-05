const { getPool } = require('../config/database');
const { authenticate } = require('../middleware/auth');

const applyForJob = async (req, res) => {
  const pool = getPool();
  if (!pool) {
    return res.writeHead(503, { 'Content-Type': 'application/json' }) &&
           res.end(JSON.stringify({ error: 'Database not available' }));
  }

  try {
    const user = authenticate(req);
    if (!user || user.role !== 'jobseeker') {
      return res.writeHead(401, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Unauthorized' }));
    }

    const { job_id, cover_letter, resume_url } = req.body;

    if (!job_id) {
      return res.writeHead(400, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Job ID is required' }));
    }

    // Check if already applied
    const [existing] = await pool.execute(
      'SELECT id FROM applications WHERE job_id = ? AND jobseeker_id = ?',
      [job_id, user.userId]
    );

    if (existing.length > 0) {
      return res.writeHead(400, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Already applied for this job' }));
    }

    const [result] = await pool.execute(
      'INSERT INTO applications (job_id, jobseeker_id, cover_letter, resume_url) VALUES (?, ?, ?, ?)',
      [job_id, user.userId, cover_letter, resume_url]
    );

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Application submitted successfully',
      applicationId: result.insertId
    }));
  } catch (error) {
    console.error('Apply for job error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

const getMyApplications = async (req, res) => {
  const pool = getPool();
  if (!pool) {
    return res.writeHead(503, { 'Content-Type': 'application/json' }) &&
           res.end(JSON.stringify({ error: 'Database not available' }));
  }

  try {
    const user = authenticate(req);
    if (!user || user.role !== 'jobseeker') {
      return res.writeHead(401, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Unauthorized' }));
    }

    const [applications] = await pool.execute(
      `SELECT a.*, j.title, j.location, j.salary, u.name as hospital_name
       FROM applications a
       JOIN jobs j ON a.job_id = j.id
       JOIN users u ON j.hospital_id = u.id
       WHERE a.jobseeker_id = ?
       ORDER BY a.created_at DESC`,
      [user.userId]
    );

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ applications }));
  } catch (error) {
    console.error('Get applications error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

const getJobApplications = async (req, res, jobId) => {
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

    // Verify job belongs to this hospital
    const [jobs] = await pool.execute(
      'SELECT id FROM jobs WHERE id = ? AND hospital_id = ?',
      [jobId, user.userId]
    );

    if (jobs.length === 0) {
      return res.writeHead(404, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Job not found' }));
    }

    const [applications] = await pool.execute(
      `SELECT a.*, u.name, u.email, u.phone, u.location
       FROM applications a
       JOIN users u ON a.jobseeker_id = u.id
       WHERE a.job_id = ?
       ORDER BY a.created_at DESC`,
      [jobId]
    );

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ applications }));
  } catch (error) {
    console.error('Get job applications error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

const updateApplicationStatus = async (req, res, applicationId) => {
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

    const { status } = req.body;

    if (!['pending', 'reviewed', 'accepted', 'rejected'].includes(status)) {
      return res.writeHead(400, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Invalid status' }));
    }

    // Verify application belongs to this hospital's job
    const [applications] = await pool.execute(
      `SELECT a.id FROM applications a
       JOIN jobs j ON a.job_id = j.id
       WHERE a.id = ? AND j.hospital_id = ?`,
      [applicationId, user.userId]
    );

    if (applications.length === 0) {
      return res.writeHead(404, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Application not found' }));
    }

    await pool.execute(
      'UPDATE applications SET status = ? WHERE id = ?',
      [status, applicationId]
    );

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Application status updated' }));
  } catch (error) {
    console.error('Update application status error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

module.exports = {
  applyForJob,
  getMyApplications,
  getJobApplications,
  updateApplicationStatus
};