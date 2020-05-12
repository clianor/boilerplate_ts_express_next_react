import mongoose, { Schema, Document } from 'mongoose';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRETKEY ? process.env.SECRETKEY : 'test';

export interface User extends Document {
  email: string;
  hash: string;
  salt: string;
  company: string;
  isAdmin: boolean;

  setPassword(password: string): void;
  comparePassword(password: string): boolean;
  generateJWT(): string;
  decodeToken(token: string): string | object | Error;
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      unique: true,
      trim: true,
      index: true,
    },
    hash: String,
    salt: String,
    company: { type: String, required: true, index: true },
    isAdmin: Boolean,
  },
  { timestamps: true },
);

UserSchema.methods.setPassword = function (password: string): void {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
};

UserSchema.methods.comparePassword = function (password: string): boolean {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
  return this.hash === hash ? true : false;
};

UserSchema.methods.generateJWT = function (): string {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
      company: this.company,
      isAdmin: this.isAdmin,
    },
    secretKey,
  );
};

UserSchema.methods.decodeToken = function (
  token: string,
): string | object | Error {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    return err as Error;
  }
};

export default mongoose.model<User>('User', UserSchema);
