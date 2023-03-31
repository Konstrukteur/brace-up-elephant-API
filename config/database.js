import pkg from "pg";
const { Pool } = pkg;

// # Configure Environment Variables
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: `${process.env.EXPRESSJS_DB_CONNECTOR}`,
});

export default pool;
