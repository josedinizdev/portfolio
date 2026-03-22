import Credentials from "../model/Credentials";

import * as get from './credentialsRepository.get';
import * as modify from './credentialsRepository.modify';

const CredentialsRepository = { get, modify }

export default CredentialsRepository;