import moment from 'moment';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Colors } from '../../interfaces/colors.interface';
import { Note } from '../../interfaces/notes.interface';
import { editNoteCursorLocation, noteInEdit } from '../../store';
import { changeNoteColorApi, deleteNotesApi, NoteElement, updateNoteApi } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ColorDropDown from '../colorDropDown/colorDropDown';

var isInital = true;
const NoteItem: React.FC<{ note: Note }> = ({ note }) => {
    const [backgroundColor, setBackgroundColor] = useState(note.config.color);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [updated, setUpdated] = useState(false);
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    let [showPalette, setOpenColorPalette] = useState(false);

    const dateFormat = moment(note.updatedAt).format('MMMM Do YYYY, h:mm:ss a');
    const dispatch = useAppDispatch();
    const editNoteId = useAppSelector(state => state.notes.noteInEdit);
    const elementInEdit = useAppSelector(state => state.notes.elementInEdit);
    const cursorLocation = useAppSelector(state => state.notes.editNoteCursorLocation);
    const _id = note._id!;
    let currentCursorLocation = cursorLocation;

    const amIInEditMode = () => {
        if (editNoteId === _id) {
            if (elementInEdit === NoteElement.title) {
                updateTitleCursor();
            } else if (elementInEdit === NoteElement.content) {
                updateContentCursor();
            }
        }
    }

    useEffect(() => {
        if (isInital) {
            isInital = false;
            return;
        } else {
            if (updated) {
                const timeoutId = setTimeout(() => {
                    dispatch(editNoteCursorLocation(currentCursorLocation));
                    dispatch(updateNoteApi({ _id, title, content }))
                }, 800);

                return () => {
                    clearTimeout(timeoutId);
                };
            }
        }

        amIInEditMode();
    }, [title, content, dispatch, updated, _id]);

    const deleteNoteHandler = () => {
        dispatch(deleteNotesApi(note._id!));
    }

    const onTitleChangeHanlder = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        currentCursorLocation = event.currentTarget.selectionStart!;
        dispatch(editNoteCursorLocation(currentCursorLocation));
        setTitle(event.currentTarget.value);
        setUpdated(true);
    }

    let onContentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        currentCursorLocation = event.currentTarget.selectionStart!;
        dispatch(editNoteCursorLocation(currentCursorLocation));
        setContent(event.currentTarget.value);
        setUpdated(true);
    }

    const updateContentCursor = () => {
        contentRef.current?.focus();
        contentRef.current?.setSelectionRange(cursorLocation, cursorLocation);
    }

    const updateTitleCursor = () => {
        titleRef.current?.focus();

        titleRef.current?.setSelectionRange(cursorLocation, cursorLocation);
    }

    const onBlufOffHanlder = () => {
        dispatch(noteInEdit({ noteId: "", elementInEdit: null }))
    }

    const onTitleClickHanlder = (event: React.FormEvent<HTMLInputElement>) => {
        dispatch(noteInEdit({ noteId: _id, elementInEdit: NoteElement.title }))
    }

    const onContentFocusHanlder = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(noteInEdit({ noteId: _id, elementInEdit: NoteElement.content }))
    }

    const handleCallback = (event: Colors) => {
        dispatch(changeNoteColorApi(_id, event));
    }

    const toggleColorPallet = () => {
        setOpenColorPalette(true);
    }

    return (
        <div className="col">
            <div style={{ "backgroundColor": backgroundColor }} className="add-note">
                <div className="inner">
                    <input ref={titleRef} placeholder="Title" value={title} onBlur={onBlufOffHanlder} onClick={onTitleClickHanlder} onChange={onTitleChangeHanlder} className="form-element title" type="text" />
                    <textarea ref={contentRef} placeholder="Write it down..." value={content} onBlur={onBlufOffHanlder} onFocus={onContentFocusHanlder} onChange={onContentChangeHandler} className="form-element flex-grow-1" />

                    <div className="settings">
                        <span id='last-mod' className="text-muted fst-italic">{dateFormat}</span>

                        <span onClick={toggleColorPallet}>
                            <i className="fa-solid fa-palette"></i>
                        </span>
                        <span onClick={deleteNoteHandler}>
                            <i className="fa-regular fa-trash-can" />
                        </span>
                    </div>
                </div>
                <OutsideClickHandler onOutsideClick={() => { setOpenColorPalette(false) }}>
                    <ColorDropDown show={showPalette} colorPicker={handleCallback} preselect={note.config.color} />
                </OutsideClickHandler>
            </div>

        </div>
    );
};

export default NoteItem;