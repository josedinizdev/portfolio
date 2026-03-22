import Missions from "../model/Missions";

import * as get from './missionsRepository.get';
import * as modify from './missionsRepository.modify';

const MissionsRepository = { get, modify }

export default MissionsRepository;