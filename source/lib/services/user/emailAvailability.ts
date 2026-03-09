import UserRepository from "@/lib/repository/userRepository";
import CredentialsRepository from "@/lib/repository/credentialsRepository";
import utils from "@/lib/utils";

export async function emailAvailability(email: string) {
  const credentials = await CredentialsRepository.get.findByEmail(email);
  if (credentials && credentials.id) {
    return email;
  } else {
    return null;
  }
}