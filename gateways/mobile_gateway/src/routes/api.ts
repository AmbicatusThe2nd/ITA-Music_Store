import { Router } from 'express';
import jetValidator from 'jet-validator';

import adminMw from './middleware/adminMw';
import Paths from './constants/Paths';
import User from '@src/models/User';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import ItemRoutes from './ItemRoutes';
import OrderRoutes from './OrderRoutes';
import SensorRoutes from './SensorRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// **** Setup **** //

const authRouter = Router();

// Login user
authRouter.post(
  Paths.Auth.Login,
  validate('email', 'password'),
  AuthRoutes.login,
);

// Logout user
authRouter.get(
  Paths.Auth.Logout,
  AuthRoutes.logout,
);

// Add AuthRouter
apiRouter.use(Paths.Auth.Base, authRouter);


// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(
  Paths.Users.Get,
  UserRoutes.getAll,
);

// Add one user
userRouter.post(
  Paths.Users.Add,
  validate(['user', User.isUser]),
  UserRoutes.add,
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(['user', User.isUser]),
  UserRoutes.update,
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(['id', 'number', 'params']),
  UserRoutes.delete,
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, adminMw, userRouter);

// ** Add ItemRouter ** //

const itemRouter = Router();

// Get all items
itemRouter.get(
  Paths.Items.Get,
  ItemRoutes.getAll,
);

// Add ItemRouter
apiRouter.use(Paths.Items.Base, itemRouter);

// ** Add OrderRouter ** //

const orderRouter = Router();

// Get all orders
orderRouter.get(
  Paths.Orders.Get,
  OrderRoutes.getAll,
)

apiRouter.use(Paths.Orders.Base, orderRouter);

// ** Add SensorRouter ** //

const sensorRouter = Router();

// Get all sensors
sensorRouter.get( Paths.Sensors.Get, SensorRoutes.getAll );

apiRouter.use(Paths.Sensors.Base, sensorRouter);

// **** Export default **** //

export default apiRouter;
