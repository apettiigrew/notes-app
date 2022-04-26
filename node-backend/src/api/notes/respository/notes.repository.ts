import { INote, NoteModel } from "../models/notes.model";

export class NoteRepository {
  async getAllNotes(): Promise<INote[]> {
    return await NoteModel.find({}).sort({ createdAt: -1 });
  }
  async getNote(id: string): Promise<INote | any> {
    return await NoteModel.findById(id);
  }
  async deleteNote(id: string): Promise<INote[] | any> {
    let result = await NoteModel.deleteOne({ _id: id });
    return result;
  }
  async saveNote(note: INote): Promise<INote[] | any> {
    const noteDoc = new NoteModel(note);

    let savedNote = await noteDoc.save();
    return savedNote;
  }
  async updateNoteColor(id: string, color: string): Promise<INote> {
    let data = await NoteModel.findByIdAndUpdate(id, { $set: { config: { color: color } } }, { new: true });
    return data!;
  }
  async updateNote(newNote: INote): Promise<INote> {
    try {
      let oldNote = await this.getNote(newNote._id);
      for (var key in newNote) {
        oldNote[key] = newNote[key as keyof INote];
      }
      let result = await oldNote.save();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
