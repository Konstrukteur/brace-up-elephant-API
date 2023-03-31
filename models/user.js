import pool from "../config/database.js";

const getUsers = async () => {
  const query = "SELECT * FROM users WHERE deleted = FALSE";

  const { rows: users } = await pool.query(query);

  return users;
};

const createUser = async (first_name, last_name, age, active) => {
  const query = `INSERT INTO users (first_name, last_name, age, active) VALUES ($1, $2, $3, $4) RETURNING *`;

  const { rows: user } = await pool.query(query, [
    first_name,
    last_name,
    age,
    active,
  ]);

  return user;
};

const showUser = async (id) => {
  const query = `SELECT * FROM users WHERE id = $1`;

  const { rows: user } = await pool.query(query, [id]);

  return user;
};

const updateUser = async (id, first_name, last_name, age, active) => {
  const query = `UPDATE users SET first_name = $1, last_name = $2, age = $3, active = $4 WHERE id = $5 RETURNING *`;

  const {
    rows: [user],
  } = await pool.query(query, [first_name, last_name, age, active, id]);

  return user;
};

const destroyUser = async (id) => {
  const query = `DELETE FROM users WHERE id = $1`;

  const { rows: user } = await pool.query(query, [id]);

  return user;
};

const flagInactive = async (id) => {
  const query = "SELECT * FROM orders WHERE user_id = $1";
  const { rows: orders } = await pool.query(query, [id]);

  if (orders.length == 0) {
    const query2 = "UPDATE users SET active = FALSE WHERE id = $1";
    const { rows: orders } = await pool.query(query2, [id]);

    return true;
  }

  return false;
};

export {
  getUsers,
  createUser,
  showUser,
  updateUser,
  destroyUser,
  flagInactive,
};
