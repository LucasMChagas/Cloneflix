import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.SECRET_KEY as string; 

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, secret, { expiresIn: expiration })
  }
}