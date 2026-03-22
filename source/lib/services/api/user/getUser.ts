import UserRepository from "@/lib/repository/userRepository";
import CredentialsRepository from "@/lib/repository/credentialsRepository";
import { Warning } from "@/lib/base/errors/Warning";

export async function getUser(iduser: string) {
  const user = await UserRepository.get.findById(iduser);
  const credentials = await CredentialsRepository.get.findByIdUser(iduser);
  if (user && user.id && credentials && credentials.id) {
    user.email = credentials.email;
    return user;
  } else {
    throw new Warning("Usuário não foi encontrado.", 400);
  }
}