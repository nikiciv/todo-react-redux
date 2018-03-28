import React from 'react';
import {
  FaPencil,
  FaCheck 
} from 'react-icons/lib/fa';

export const EditButton = (props) => {
        if(!props.reminder.isEditing) {
            return(
                <button 
                    className="list-item btn btn-dark btn-xs pull-right edit"
                    onClick={() => {props.toggleIsEditingRow(props.reminder.id, true)}}
                >
                    <FaPencil />
                </button>
                );
        } else {
            return(
                <button 
                    className="list-item btn btn-success btn-xs pull-right edit"
                    onClick={() => {props.toggleIsEditingRow(props.reminder.id, false)}}
                >
                    <FaCheck />
                </button>
                );
        } 
}

