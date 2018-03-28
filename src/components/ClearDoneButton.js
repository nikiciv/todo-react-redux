import React from 'react';
import { FaCheckSquareO } from 'react-icons/lib/fa';

export const ClearDoneButton = (props) => {

    const doneReminderList = props.reminders.filter((reminder) => reminder.isDone === true);

    return(
        doneReminderList.length > 0 &&
            <button
                className="btn btn-primary clear-done-button"
                type="button"
                onClick={() => props.clearDoneReminders()}
            >
                <FaCheckSquareO /> Clear done
        </button>
    )
};