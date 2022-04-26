import { INote } from "../models/notes.model";
import { NoteRepository } from "../respository/notes.repository";

export class NoteService {
  noteRepository: NoteRepository;
  constructor() {
    this.noteRepository = new NoteRepository();
  }
  async getAllNotes(): Promise<INote[]> {
    let notes: INote[] = await this.noteRepository.getAllNotes();
    return notes;
  }

  async getNote(id: string): Promise<INote> {
    let qoute: INote = await this.noteRepository.getNote(id);
    return qoute;
  }

  async saveNote(qoute: INote): Promise<INote[]> {
    let savedNote = await this.noteRepository.saveNote(qoute);
    return savedNote;
  }

  async deleteNote(id: string): Promise<boolean> {
    let dbResult = await this.noteRepository.deleteNote(id);
    return dbResult;
  }

  async updateNote(qoute: INote): Promise<INote> {
    let savedNote = await this.noteRepository.getNote(qoute._id);
    if (!savedNote) {
      throw new Error();
    }

    let updateNote = await this.noteRepository.updateNote(qoute);
    return updateNote;
  }

  async updateNoteColor(id: string, color: string): Promise<INote> {
    let savedNote = await this.noteRepository.getNote(id);
    if (!savedNote) {
      throw new Error();
    }

    let updateNote = await this.noteRepository.updateNoteColor(id, color);
    return updateNote;
  }
}
