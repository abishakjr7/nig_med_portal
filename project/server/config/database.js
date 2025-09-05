const mysql = require('mysql2/promise');

// Database configuration - Update these credentials
const dbConfig = {
  host: '', // Your MySQL host
  user: '', // Your MySQL username
  password: '', // Your MySQL password
  database: '', // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let pool = null;

const initDatabase = async () => {
  try {
    if (!dbConfig.host || !dbConfig.user || !dbConfig.database) {
      console.log('⚠️  Database credentials not configured. Please update server/config/database.js');
      return null;
    }
    
    pool = mysql.createPool(dbConfig);
    
    // Test connection
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL database');
    connection.release();
    
    // Initialize tables
    await initTables();
    
    return pool;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return null;
  }
};

const initTables = async () => {
  if (!pool) return;
  
  try {
    // Create users table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role ENUM('hospital', 'jobseeker') NOT NULL,
        phone VARCHAR(20),
        location VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create jobs table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS jobs (
        id INT PRIMARY KEY AUTO_INCREMENT,
        hospital_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        location VARCHAR(255) NOT NULL,
        salary VARCHAR(100),
        requirements TEXT,
        benefits TEXT,
        employment_type ENUM('full_time', 'part_time', 'contract') DEFAULT 'full_time',
        experience_level VARCHAR(100),
        status ENUM('active', 'closed') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (hospital_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Create applications table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS applications (
        id INT PRIMARY KEY AUTO_INCREMENT,
        job_id INT NOT NULL,
        jobseeker_id INT NOT NULL,
        status ENUM('pending', 'reviewed', 'accepted', 'rejected') DEFAULT 'pending',
        cover_letter TEXT,
        resume_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE,
        FOREIGN KEY (jobseeker_id) REFERENCES users(id) ON DELETE CASCADE,
        UNIQUE KEY unique_application (job_id, jobseeker_id)
      )
    `);

    // Create subscriptions table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        plan ENUM('basic', 'premium', 'enterprise') NOT NULL,
        status ENUM('active', 'inactive', 'expired') DEFAULT 'active',
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Create saved_jobs table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS saved_jobs (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        job_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE,
        UNIQUE KEY unique_saved_job (user_id, job_id)
      )
    `);

    console.log('✅ Database tables initialized');
  } catch (error) {
    console.error('❌ Failed to initialize tables:', error.message);
  }
};

const getPool = () => pool;

module.exports = {
  initDatabase,
  getPool
};