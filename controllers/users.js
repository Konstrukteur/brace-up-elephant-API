import {
  getUsers,
  createUser,
  showUser,
  updateUser,
  destroyUser,
  flagInactive,
} from "../models/user.js";

const index = async (req, res) => {
  const users = await getUsers();

  res.json(users);
};

const create = async (req, res) => {
  const { first_name, last_name, age, active } = req.body;

  if (!first_name || !last_name || !age || !active)
    return res.json({ error: "Missing data" });

  const user = await createUser(first_name, last_name, age, active);

  res.status(201).json(user);
};

const show = async (req, res) => {
  const { id } = req.params;

  const user = await showUser(id);

  res.json(user);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, age, active } = req.body;

  if (!first_name || !last_name || !age || !active || !id)
    return res.json({ error: "Missing data" });

  const user = await updateUser(id, first_name, last_name, age, active);

  res.json(user);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const user = await destroyUser(id);

  res.json(user);
};

const setInactive = async (req, res) => {
  const { id } = req.params;

  const response = await flagInactive(id);

  request.json({
    message: response ? "user marked as inactive" : "user is active",
  });
};

export { index, create, show, update, destroy, setInactive };
