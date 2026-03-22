import { TimeStampZ } from "./globals";

export default interface Project {
  id: string,
  title: string,
  status: 'idea' | 'proposal_sent' | 'negotiating' | 'active' | 'mission_active',
  description: string,
  created_at: TimeStampZ,
  idparties: string,
  total_cost: number,
  total_amount: number,
  total_markup: number,
}

export type ProjectDto = Omit<Project, "id" | "created_at">;