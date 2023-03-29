// # Import dependencies
import express from "express";
import cors from "cors";

// # Import Routes
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";

// # Set up Express
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/orders/", orderRoutes);

app.listen(PORT, () => {
  console.log(
    `\nserver listening on port ${PORT}\nPress CTRL + C to stop the server`
  );
});
