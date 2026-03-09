import { Warning } from "@/lib/base/errors/Warning";
import { User } from "@/lib/model";
import utils from "@/lib/utils";

export function isLogged(req: Request): User {
  const token = req.headers.get("authorization");
  if (!token) throw new Warning("Realize o login", 403);
  return utils.decryptJWT(token, process.env.JWT_KEY);
}