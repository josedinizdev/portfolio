import Task from "../model/Task";

export type TaskDto = Omit<Task, "id" | "created_at">;

import * as get from './taskRepository.get';
import * as modify from './taskRepository.modify';

const TaskRepository = { get, modify }

export default TaskRepository;