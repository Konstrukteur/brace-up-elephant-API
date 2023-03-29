import { Router } from "express";
import {
  showOrders,
  createOrder,
  showOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.js";

const orderRoutes = Router();

orderRoutes.route("/").get(showOrders).post(createOrder);

orderRoutes.route("/:id").get(showOrder).put(updateOrder).delete(deleteOrder);

export default orderRoutes;
