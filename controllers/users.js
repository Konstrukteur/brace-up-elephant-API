import pool from "../config/database.js";

const showUsers = async (request, response, next) => {
  const sql = `SELECT * FROM users WHERE active = TRUE ORDER BY id ASC`;
  const { rows: users } = await pool.query(sql);

  response.json(users);
};

const createUser = async (request, response, next) => {
  const sql = `INSERT INTO users (first_name, last_name, age, active) VALUES ($1, $2, $3, $4) RETURNING *`;
  const { first_name, last_name, age, active } = request.body;

  if (!first_name || !last_name || !age || !active)
    return response.json({ error: "Missing data" });

  const { rows: users } = await pool.query(sql, [
    first_name,
    last_name,
    age,
    active,
  ]);

  response.status(201).json(users);
};

const showUser = async (request, response, next) => {
  const sql = `SELECT * FROM users WHERE id = $1`;
  const { id } = request.params;
  const {
    rows: [user],
  } = await pool.query(sql, [id]);

  response.json(user);
};

const updateUser = async (request, response, next) => {
  const sql = `UPDATE users SET first_name = $1, last_name = $2, age = $3, active = $4 WHERE id = $5 RETURNING *`;
  const { id } = request.params;
  const { first_name, last_name, age, active } = request.body;

  if (!first_name || !last_name || !age || !active || !id)
    return response.json({ error: "Missing data" });

  const { rows: user } = await pool.query(sql, [
    first_name,
    last_name,
    age,
    active,
    id,
  ]);

  response.json(user);
};

const deleteUser = async (request, response, next) => {
  const sql = `DELETE FROM users WHERE id = $1`;

  const { id } = request.params;
  const { rows: user } = await pool.query(sql, [id]);

  response.json(user);
};

export { showUsers, createUser, showUser, updateUser, deleteUser };
