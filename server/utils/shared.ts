import { Request, Response, NextFunction } from 'express';

export const doAsync = (func: Function) => async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => await func(req, res, next).catch(next);
