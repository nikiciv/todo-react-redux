import React from 'react';

export const DoneButton = (props) => {
        
        return(
            <input 
                className={"toggle" + (props.reminder.isEditing ? '-hidden' : '-show')}
                type="checkbox"
                checked={props.reminder.isDone}
                onClick={() => {props.doneReminder(props.reminder.id, !props.reminder.isDone)}}
            >
            </input>
        );

}
