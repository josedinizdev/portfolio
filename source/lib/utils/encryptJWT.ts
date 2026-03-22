import jwt from "jsonwebtoken";

export function encryptJWT(payload: any, key: any, expiresIn: jwt.SignOptions["expiresIn"] = "1d"): string {
  return jwt.sign(payload, key, { expiresIn });
}