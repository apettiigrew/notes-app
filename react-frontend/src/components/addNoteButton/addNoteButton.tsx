import React from 'react';
import { addNoteApi } from '../../store/actions';
import addButtonIcon from "./../../assets/images/icons8-plus-64.png"
import { useAppDispatch } from './../../store/hooks';

const AddNoteButton: React.FC<{}> = (props) => {

    const dispatch = useAppDispatch();
    const addNoteClickHandler = () => {
        dispatch(addNoteApi())
    };

    return (
        <div className="col">
            <div onClick={addNoteClickHandler} className="add-note">
                <div className="inner-add-note">
                    <img src={addButtonIcon} alt="Add Icon Button" />
                    <p>Add New Note</p>
                </div>
            </div>
        </div>
    );
};

export default AddNoteButton;
