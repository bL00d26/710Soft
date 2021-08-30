import { Technology } from "./technology.interface";

export interface TechnologyUser {
  _id: string;
  description: string;
  user: string;
  technology: Technology;
}
