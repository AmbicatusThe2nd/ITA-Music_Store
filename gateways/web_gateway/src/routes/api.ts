import { Router } from "express";
import jetValidator from "jet-validator";

import adminMw from "./middleware/adminMw";
import Paths from "./constants/Paths";
import User from "@src/models/User";
import UserRoutes from "./UserRoutes";
import ItemRoutes from "./ItemRoutes";
import OrderRoutes from "./OrderRoutes";

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// **** Setup **** //

// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);

// Add one user
userRouter.post(
  Paths.Users.Add,
  validate(["user", User.isUser]),
  UserRoutes.add
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(["user", User.isUser]),
  UserRoutes.update
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(["id", "number", "params"]),
  UserRoutes.delete
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, adminMw, userRouter);

// ** Add ItemRouter ** //

const itemRouter = Router();

// Get all items
itemRouter.get(Paths.Items.Get, ItemRoutes.getAll);

// Add ItemRouter
apiRouter.use(Paths.Items.Base, itemRouter);

// ** Add OrderRouter ** //

const orderRouter = Router();

// Get all orders
orderRouter.get(Paths.Orders.Get, OrderRoutes.getAll);

// Post one order
orderRouter.post(Paths.Orders.Add, OrderRoutes.addOrder);

apiRouter.use(Paths.Orders.Base, orderRouter);
// **** Export default **** //

export default apiRouter;
