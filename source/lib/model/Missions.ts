import { TimeStampZ } from "./globals";

export default interface Mission {
  id: string,
  idproject: string,
  title: string,
  description: string,
  status: 'idea' | 'backlog_draft' |
  'backlog_refined' | 'planning' |
  'estimating' | 'in_progress' |
  'blocked' | 'deployed' | 'cancelled',
  date_start: TimeStampZ,
  date_end: TimeStampZ,
  total_amount: number,
  created_at: TimeStampZ,
  total_cost: number,
  total_markup: number,
  estimated_amount: number,
  estimated_cost: number,
  estimated_markup: number,
}