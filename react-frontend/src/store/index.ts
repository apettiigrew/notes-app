import { AnyAction, configureStore, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { Note } from "../interfaces/notes.interface";
import { NoteElement, NoteInEdit } from "./actions";

interface State {
  notes: Note[];
  noteInEdit: string;
  elementInEdit: NoteElement | null;
  editNoteCursorLocation: number;
}

const initialState: State = {
  notes: [],
  noteInEdit: "",
  elementInEdit: null,
  editNoteCursorLocation: 0,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes(state, action: PayloadAction<Note[]>) {
      state.notes.unshift(...action.payload);
    },
    addNote(state, action: PayloadAction<Note>) {
      state.notes.unshift(action.payload);
    },
    updateNote(state, action: PayloadAction<Note>) {
      const note = state.notes.find((note) => note._id === action.payload._id);
      note!.title = action.payload.title;
      note!.content = action.payload.content;
      note!.updatedAt = action.payload.updatedAt;
    },
    deleteNote(state, action: PayloadAction<string>) {
      state.notes = state.notes.filter((note) => note._id !== action.payload);
    },
    editNoteCursorLocation(state, action: PayloadAction<number>) {
      state.editNoteCursorLocation = action.payload;
    },
    changeNoteColor(state, action: PayloadAction<Note>) {
      const note = state.notes.find((note) => note._id === action.payload._id);
      if (note) {
        note!.config.color = action.payload.config.color;
      }
    },
    noteInEdit(state, action: PayloadAction<NoteInEdit>) {
      state.noteInEdit = action.payload.noteId;
      state.elementInEdit = action.payload.elementInEdit;
    },
  },
});

const store = configureStore({
  reducer: { notes: noteSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export const { addNote, deleteNote, updateNote, addNotes, noteInEdit, changeNoteColor, editNoteCursorLocation } = noteSlice.actions;
export default store;
