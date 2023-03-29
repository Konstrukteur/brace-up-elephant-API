import { Router } from "express";
import {
  showUsers,
  createUser,
  showUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.route("/").get(showUsers).post(createUser);

userRoutes.route("/:id").get(showUser).put(updateUser).delete(deleteUser);

export default userRoutes;
