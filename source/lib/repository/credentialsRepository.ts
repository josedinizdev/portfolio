import Credentials from "../model/Credentials";

export type CredentialsDto = Omit<Credentials, "id" | "created_at">;

import * as get from './credentialsRepository.get';
import * as modify from './credentialsRepository.modify';

const CredentialsRepository = { get, modify }

export default CredentialsRepository;