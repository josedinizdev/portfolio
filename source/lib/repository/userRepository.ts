import User from "../model/User";

import * as get from './userRepository.get';
import * as modify from './userRepository.modify';

const UserRepository = { get, modify }

export default UserRepository;