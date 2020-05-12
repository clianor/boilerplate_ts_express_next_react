import express, { Request, Response } from 'express';
import AuthRoutes from './auth/routes';

const router = express.Router();
router.use('/auth', AuthRoutes);
router.get('/', (req: Request, res: Response) => {
  res.status(200).send('test');
});

export default router;
