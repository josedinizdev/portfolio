import { Warning } from "@/lib/base/errors/Warning";
import { createUser } from "@/lib/services/user/createUser";
import { loginUser } from "@/lib/services/user/loginUser";
import utils from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await loginUser(email, password);
    const jwt = utils.encryptJWT(user, process.env.JWT_KEY);

    return NextResponse.json({ token: jwt });
  } catch (err) {
    if (err instanceof Warning) {
      return NextResponse.json({ error: err }, { status: err.code });  
    } else {
      return NextResponse.json({ error: { name: "Erro no servidor" } }, { status: 500 });
    }
  }
}