import User from "../model/User";

export type UserDto = Omit<User, "id" | "created_at">;

import * as get from './userRepository.get';
import * as modify from './userRepository.modify';

const UserRepository = { get, modify }

export default UserRepository;