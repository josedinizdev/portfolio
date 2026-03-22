import Attachments from "../model/Attachments";

import * as get from './attachmentsRepository.get';
import * as modify from './attachmentsRepository.modify';

const AttachmentsRepository = { get, modify }

export default AttachmentsRepository;