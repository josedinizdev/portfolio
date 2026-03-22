import { Warning } from "@/lib/base/errors/Warning";
import threat from "@/lib/base/threat";
import { loginUser } from "@/lib/services/api/user/loginUser";
import utils from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await loginUser(email, password);
    const jwt = utils.encryptJWT(user, process.env.JWT_KEY);
    
    return NextResponse.json({ token: jwt });
  } catch (err) {
    return threat(err);
  }
}