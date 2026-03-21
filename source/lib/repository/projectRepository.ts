import Project from "../model/Project";

export type ProjectDto = Omit<Project, "id" | "created_at">;

import * as get from './projectRepository.get';
import * as modify from './projectRepository.modify';

const ProjectRepository = { get, modify }

export default ProjectRepository;