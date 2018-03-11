import React from 'react';
import moment from 'moment-timezone';
import {
     FaPencil,
     FaCheck 
} from 'react-icons/lib/fa';
import EditButtons from './EditButtons';
import InputField from './InputField';

class RemindersList extends React.Component {


    renderEditButtons(reminder) {
        if(!reminder.isEditing) {
           return(<button 
            className="list-item btn btn-dark btn-xs pull-right edit"
            onClick={() => {this.props.toggleIsEditingRow(reminder.id, true)}}
          >
            <FaPencil />
            </button>);
        } else {
             return(<button 
             className="list-item btn btn-success btn-xs pull-right edit"
             onClick={() => {this.props.toggleIsEditingRow(reminder.id, false)}} 
            >
             <FaCheck />
             </button>)
        }
    }


    renderInputField(reminder) {
        if(!reminder.isEditing) {
            return(<span className="list-item">{reminder.text}</span>)
        } else {
            return(<input type="text" ref={(c) => { this.taskInput = c; }}  />)
        }
    }



    render () {
        const { reminders, deleteReminder } = this.props;
        return (
            <ul className="list-group">
                {
                  reminders.map((reminder) => (
                        <li key={reminder.id} className="list-group-item">
                            {this.renderInputField(reminder)}         
                            <button
                                className="list-item btn btn-danger btn-xs pull-right"
                                onClick={() => deleteReminder(reminder.id)}
                            >
                                &#x2715;
                            </button>
                            {this.renderEditButtons(reminder)}
                            <div className="list-item time">
                                {
                                    moment(new Date(reminder.dueDate))
                                    .fromNow()
                                }
                            </div>
                        </li>))
                }
            </ul>
        );
    }
}

export default RemindersList;
