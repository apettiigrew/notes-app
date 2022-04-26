import Joi from "joi";
import mongoose from "mongoose";

var Schema = mongoose.Schema;

interface IConfig extends Document {
  color: string;
}

export interface INote extends Document {
  _id: string;
  title: string;
  content: string;
  config: IConfig;
}

var noteSchema = new Schema<INote>(
  {
    title: { type: String, default: "" },
    content: { type: String, default: "" },
    config: { color: { type: String, default: "#fff" } },
  },
  { timestamps: true }
);

export const NoteModel = mongoose.model<INote>("Note", noteSchema);

export function validateNote(note: INote) {
  const schema = Joi.object({
    _id: Joi.string().optional(),
    title: Joi.string().allow("").optional(),
    content: Joi.string().allow("").optional(),
  });

  return schema.validate(note);
}
