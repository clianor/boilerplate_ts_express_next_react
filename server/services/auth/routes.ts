import express, { Request, Response, NextFunction } from 'express';
import { doAsync } from '../../utils/shared';
import User from '../../models/User';
import * as auth from './AuthController';

const router = express.Router();

router.get(
  '/',
  doAsync(async (req: Request, res: Response, next: NextFunction) => {
    auth.getUsers(req, res, next);
  }),
);

router.post(
  '/login',
  doAsync(async (req: Request, res: Response, next: NextFunction) => {
    auth.login(req, res, next);
  }),
);

router.post(
  '/register',
  doAsync(async (req: Request, res: Response, next: NextFunction) => {
    auth.register(req, res, next);
  }),
);
export default router;
