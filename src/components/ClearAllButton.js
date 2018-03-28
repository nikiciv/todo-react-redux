import React from 'react';
import { FaList } from 'react-icons/lib/fa';

export const ClearAllButton = (props) => {
    return(
        props.reminders.length > 1 &&
            <button
                className="btn btn-danger"
                type="button"
                onClick={() => props.clearReminders()}
            >
                <FaList /> Clear all
        </button>
    )
};