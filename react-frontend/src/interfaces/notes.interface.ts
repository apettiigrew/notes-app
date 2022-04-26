import { Colors } from "./colors.interface";

export interface Note {
  _id?: string;
  title: string;
  content: string;
  updatedAt: string;
  config: {
    color: Colors | string;
  };
}
