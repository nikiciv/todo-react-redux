import React from 'react';
import { AllRemindersList } from './AllRemindersList';
import { DoneRemindersList } from './DoneRemindersList';
import { ActiveRemindersList } from './ActiveRemindersList';

export const RemindersList = (props) => {
    const { 
        reminders, 
        deleteReminder, 
        toggleIsEditingRow, 
        editReminderText,
        doneReminder,
        currentFilter 
    } = props;
    
    switch(currentFilter) {
        case 'ALL':
            return  <AllRemindersList 
                        reminders = {props.reminders}
                        deleteReminder = {props.deleteReminder}
                        toggleIsEditingRow = {props.toggleIsEditingRow}
                        editReminderText = {props.editReminderText}
                        doneReminder = {props.doneReminder}
                    />
        case 'DONE':
            return  <DoneRemindersList 
                        reminders = {props.reminders}
                        deleteReminder = {props.deleteReminder}
                        toggleIsEditingRow = {props.toggleIsEditingRow}
                        editReminderText = {props.editReminderText}
                        doneReminder = {props.doneReminder}
                    />
        case 'ACTIVE':
            return  <ActiveRemindersList 
                        reminders = {props.reminders}
                        deleteReminder = {props.deleteReminder}
                        toggleIsEditingRow = {props.toggleIsEditingRow}
                        editReminderText = {props.editReminderText}
                        doneReminder = {props.doneReminder}
                    />
        default:
            throw new Error('The visibility filter does not exist.');
    };

};
    
    