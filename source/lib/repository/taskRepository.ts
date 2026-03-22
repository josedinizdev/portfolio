import Task from "../model/Task";

import * as get from './taskRepository.get';
import * as modify from './taskRepository.modify';

const TaskRepository = { get, modify }

export default TaskRepository;