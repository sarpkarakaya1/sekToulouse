export interface Project {
  id: number;
  title: string;
  category: 'portfolio' | 'fictional';
  image: string;
  description: string;
  details: string;
  tools: string[];
  date: string;
  client?: string;
}