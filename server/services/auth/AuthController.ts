import { Request, Response, NextFunction } from 'express';
import User from '../../models/User';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = await User.find().select('email company');

  res.status(200).json(user);
};

/**
 * 로그인
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: '필수 데이터 중 없는 데이터가 존재합니다.' });
    next();
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: '이메일을 찾을 수 없습니다.' });
  }

  if (!user.comparePassword(password)) {
    return res.status(401).json({ error: '패스워드가 틀렸습니다.' });
  }

  const result = user.generateJWT();
  return res.status(200).json({ authorization: result });
};

/**
 * 회원가입
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, company, password, passwordConfirm } = req.body;

  if (!email || !company || !password || !passwordConfirm) {
    res.status(400).json({ error: 'Empty data exists.' });
    next();
  }

  if (password !== passwordConfirm) {
    res
      .status(400)
      .json({ error: 'password and passwordConfirm do not match.' });
    next();
  }

  const isUser = await User.find({ email });
  if (isUser.length !== 0) {
    return res.status(401).json({ error: 'Email that already exists.' });
  }

  const user = new User({ email: email, company: company });
  try {
    user.setPassword(password);
    user.save();
  } catch (e) {
    res.status(400).json({ error: e });
    next();
  }

  const result = user.generateJWT();
  res.status(200).json({ authorization: result });
};
