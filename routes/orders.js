import { Router } from "express";
import {
  index as showOrders,
  create as createOrder,
  show as showOrder,
  update as updateOrder,
  destroy as destroyOrder,
} from "../controllers/orders.js";

const orderRoutes = Router();

orderRoutes.route("/").get(showOrders).post(createOrder);

orderRoutes.route("/:id").get(showOrder).put(updateOrder).delete(destroyOrder);

export default orderRoutes;
