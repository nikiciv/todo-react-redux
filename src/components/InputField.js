import React from 'react';

export class InputField extends React.Component {

    render() {
        if(!this.props.reminder.isEditing) {
            if(this.props.reminder.isDone) {
                return(<span className="list-item-text-done">{this.props.reminder.text}</span>)
            } else {
                return(<span className="list-item-text">{this.props.reminder.text}</span>)
            }
        } else {
            return(<input className="list-item-input" type="text" value={this.props.reminder.text}  onChange={(e) => this.props.editReminderText(e.target.value, this.props.reminder.id)} />)
        }
    }

};


