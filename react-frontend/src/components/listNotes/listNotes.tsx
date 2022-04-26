import React, { Fragment } from 'react';
import { Note } from '../../interfaces/notes.interface';
import { useAppSelector } from '../../store/hooks';
import NoteItem from '../noteItem/noteItem';

const ListNotes: React.FC<{}> = (props) => {
    const notes = useAppSelector<Note[]>(state => state.notes.notes);
   
    return <Fragment>
        {notes.map(note => {
            return <NoteItem note={note} key={Math.random()} />
        })}
    </Fragment>
}

export default ListNotes;