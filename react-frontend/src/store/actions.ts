import axios from "axios";
import { addNote, addNotes, AppThunk, changeNoteColor, deleteNote, updateNote } from ".";
import { Colors } from "../interfaces/colors.interface";
const URL = "http://127.0.0.1:8081/api/notes";

export enum NoteElement {
  title = "title",
  content = "content",
}

export type NoteInEdit = { noteId: string; elementInEdit: NoteElement | null };

export const fetchNotesApi = (): AppThunk => async (dispatch) => {
  let response = await axios.get(URL);

  if (response.statusText === "OK") {
    dispatch(addNotes(response.data));
  }
};

export const changeNoteColorApi =
  (id: string, color: Colors): AppThunk =>
  async (dispatch) => {
    let response = await axios.put(`${URL}/${id}/color`, { color });

    if (response.statusText === "OK") {
      dispatch(changeNoteColor(response.data));
    }
  };

export const deleteNotesApi =
  (noteId: string): AppThunk =>
  async (dispatch) => {
    let response = await axios.delete(`${URL}/${noteId}`);

    if (response.statusText === "OK") {
      dispatch(deleteNote(noteId));
    }
  };

export const addNoteApi = (): AppThunk => async (dispatch) => {
  let response = await axios.post(`${URL}`);

  if (response.statusText === "OK") {
    const newNote = response.data;

    dispatch(addNote(newNote));
  }
};

export const updateNoteApi =
  (noteDto: { _id: string; title: string; content: string }): AppThunk =>
  async (dispatch) => {
    let response = await axios.put(`${URL}/${noteDto._id}`, noteDto);
    dispatch(updateNote(response.data));
  };
