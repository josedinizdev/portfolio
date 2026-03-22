import Project from "../model/Project";

import * as get from './projectRepository.get';
import * as modify from './projectRepository.modify';

const ProjectRepository = { get, modify }

export default ProjectRepository;