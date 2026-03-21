import { TimeStampZ } from "./globals";

export default interface Task {
  id: string,
  idmission: string,
  idservice: string,
  title: string,
  description: string,
  status: 'backlog' | 'in_progress' | 'implemented' | 'tested' | 'done',
  estimated_hours: number,
  total_hours: number,
  date_start: TimeStampZ,
  date_end: TimeStampZ,
  created_at: TimeStampZ,
}