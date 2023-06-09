import pool from "../config/database.js";

const index = async (request, response, next) => {
  const sql = `SELECT * FROM orders ORDER BY id ASC`;
  const { rows: orders } = await pool.query(sql);

  response.json(orders);
};

const create = async (request, response, next) => {
  const sql = `INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3) RETURNING *`;
  const { price, date, user_id } = request.body;

  if (!price || !date || !user_id)
    return response.json({ error: "Missing data" });

  const { rows: order } = await pool.query(sql, [price, date, user_id]);

  response.status(201).json(order);
};

const show = async (request, response, next) => {
  const sql = `SELECT * FROM orders WHERE id = $1`;
  const { id } = request.params;
  const {
    rows: [order],
  } = await pool.query(sql, [id]);

  response.json(order);
};

const update = async (request, response, next) => {
  const sql = `UPDATE orders SET price = $1, date = $2, user_id = $3 WHERE id = $4 RETURNING *`;
  const { id } = request.params;
  const { price, date, user_id } = request.body;

  if (!price || !date || !user_id || !id)
    return response.json({ error: "Missing data" });

  const { rows: order } = await pool.query(sql, [price, date, user_id, id]);

  response.json(order);
};

const destroy = async (request, response, next) => {
  const sql = `DELETE FROM orders WHERE id = $1`;
  const { id } = request.params;
  const { rows: order } = await pool.query(sql, [id]);

  response.json(order);
};

export { index, show, create, update, destroy };
