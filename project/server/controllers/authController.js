const { getPool } = require('../config/database');
const { hashPassword, comparePassword, generateToken } = require('../middleware/auth');

const signup = async (req, res) => {
  const pool = getPool();
  if (!pool) {
    return res.writeHead(503, { 'Content-Type': 'application/json' }) &&
           res.end(JSON.stringify({ error: 'Database not available' }));
  }

  try {
    const { name, email, password, role, phone, location } = req.body;

    // Validate required fields
    if (!name || !email || !password || !role) {
      return res.writeHead(400, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Missing required fields' }));
    }

    // Check if user exists
    const [existing] = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existing.length > 0) {
      return res.writeHead(400, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Email already registered' }));
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password, role, phone, location) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, hashedPassword, role, phone || null, location || null]
    );

    // Generate token
    const token = generateToken(result.insertId, email, role);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'User created successfully',
      token,
      user: {
        id: result.insertId,
        name,
        email,
        role,
        phone,
        location
      }
    }));
  } catch (error) {
    console.error('Signup error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

const login = async (req, res) => {
  const pool = getPool();
  if (!pool) {
    return res.writeHead(503, { 'Content-Type': 'application/json' }) &&
           res.end(JSON.stringify({ error: 'Database not available' }));
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.writeHead(400, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Email and password required' }));
    }

    // Find user
    const [users] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return res.writeHead(401, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Invalid credentials' }));
    }

    const user = users[0];

    // Verify password
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      return res.writeHead(401, { 'Content-Type': 'application/json' }) &&
             res.end(JSON.stringify({ error: 'Invalid credentials' }));
    }

    // Generate token
    const token = generateToken(user.id, user.email, user.role);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        location: user.location
      }
    }));
  } catch (error) {
    console.error('Login error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

module.exports = {
  signup,
  login
};