import { Warning } from "@/lib/base/errors/Warning";
import threat from "@/lib/base/threat";
import { isLogged } from "@/lib/services/api/isLogged";
import { createUser } from "@/lib/services/api/user/createUser";
import { getUser } from "@/lib/services/api/user/getUser";
import utils from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    let user = isLogged(req);
    user = await getUser(user.id);

    return NextResponse.json(user);
  } catch (err) {
    return threat(err);
  }
}

export async function POST(req: Request) {
  try {
    throw new Warning("", 404);
    const { name, email, password } = await req.json();

    const user = await createUser(name, email, password);
    const jwt = utils.encryptJWT(user, process.env.JWT_KEY);

    return NextResponse.json({ token: jwt });
  } catch (err) {
    return threat(err);
  }
}