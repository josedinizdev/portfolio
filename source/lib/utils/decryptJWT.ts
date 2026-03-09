import jwt from "jsonwebtoken";

export function decryptJWT<T = object>(token: string, key: any): T {
  return jwt.verify(token, key) as T;
}