import express from "express";
import { NoteController } from "./controller/notes.controller";
const router = express.Router();

const noteController = new NoteController();
router.get("/", noteController.getAllNotes.bind(noteController));
router.post("/", noteController.saveNote.bind(noteController));
router.put("/:id", noteController.updateNote.bind(noteController));
router.put("/:id/color", noteController.updateNoteColor.bind(noteController));
router.delete("/:id", noteController.deleteNote.bind(noteController));

export default router;
