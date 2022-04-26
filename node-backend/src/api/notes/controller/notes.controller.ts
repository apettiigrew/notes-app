import { Request, Response } from "express";
import HttpStatus from "http-status";
import mongoose from "mongoose";
import { INote, validateNote } from "../models/notes.model";
import { NoteService } from "../service/notes.service";

export class NoteController {
  noteService: NoteService;
  constructor() {
    this.noteService = new NoteService();
  }

  async updateNoteColor(req: Request, res: Response) {
    const payload = req.body;
    let result = await this.noteService.updateNoteColor(req.params.id, payload.color);

    return res.status(HttpStatus.OK).json(result);
  }

  async getAllNotes(req: Request, res: Response) {
    let notes = await this.noteService.getAllNotes();
    return res.status(HttpStatus.OK).json(notes);
  }

  async updateNote(req: Request, res: Response) {
    const payload = req.body;

    let { error } = validateNote(payload);
    if (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }

    let note = await this.noteService.updateNote(payload);
    return res.status(HttpStatus.OK).json(note);
  }

  async saveNote(req: Request, res: Response) {
    const payload = req.body;
    let { error } = validateNote(payload);
    if (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error.details);
    }

    const note: INote = payload;
    let notes = await this.noteService.saveNote(note);
    return res.status(HttpStatus.OK).json(notes);
  }

  async deleteNote(req: Request, res: Response) {
    const noteId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
      return res.status(HttpStatus.NOT_FOUND).send("Invalid 'id' param.");
    }
    let results = await this.noteService.deleteNote(noteId);
    return res.status(HttpStatus.OK).json(results);
  }
}
