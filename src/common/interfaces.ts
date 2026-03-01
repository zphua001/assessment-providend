import { UUID } from "crypto";

export interface Client {
  id: number;
  name: string;
}

export interface Note {
  id?: UUID;
  clientId: number;
  content: string;
  createdAt: Date;
}