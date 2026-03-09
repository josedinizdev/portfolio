import jwt from "jsonwebtoken";

export function encryptJWT(payload: any, key: any, expiresIn: any = "1h"): string {
  return jwt.sign(payload, key, { expiresIn });
}