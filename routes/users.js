import { Router } from "express";
import {
  index as showUsers,
  create as createUser,
  show as showUser,
  update as updateUser,
  destroy as destroyUser,
  setInactive as setUserInactive,
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.route("/").get(showUsers).post(createUser);

userRoutes.route("/:id").get(showUser).put(updateUser).delete(destroyUser);

userRoutes.route("/:id/check-inactive").put(setUserInactive);

export default userRoutes;
