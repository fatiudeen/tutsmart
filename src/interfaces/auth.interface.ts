import { IUser } from '@interfaces/users.interface';
import { Request } from 'express';

export interface DataStoredInToken {
  id: number;
  expiresIn: number;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: IUser;
}
