import Missions from "../model/Missions";

export type MissionsDto = Omit<Missions, "id" | "created_at">;

import * as get from './missionsRepository.get';
import * as modify from './missionsRepository.modify';

const MissionsRepository = { get, modify }

export default MissionsRepository;