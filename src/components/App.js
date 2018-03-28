import React, { Component } from 'react';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import { RemindersList } from './RemindersList';
import { ClearAllButton } from './ClearAllButton';
import { ClearDoneButton } from './ClearDoneButton';
import { Filter } from './Filter';
import { 
    addReminder, 
    deleteReminder, 
    clearReminders, 
    toggleIsEditingRow,
    editReminderText,
    doneReminder,
    clearDoneReminders,
    changeCurrentFilter
} from '../actions';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
        };
        this.addCheckActive = this.addCheckActive.bind(this);
    }

    
    addReminder (e) {
        if(moment(this.timeInput.value).isBefore(Date.now())) {
            alert('No dates in the past are allowed!');
            this.timeInput.value = moment().add(1, 'm').format('YYYY-MM-DDTHH:mm');
        } else {
            this.props.addReminder(
                this.taskInput.value,
                moment(this.timeInput.value).toDate()
            );
            this.taskInput.value = '';
            this.setState({disabled: true});
        }
    }

    deleteReminder (id) {
        this.props.deleteReminder(id);
    }

    addCheckActive() {
        const newValue = this.taskInput.value;
        if (newValue > '' && this.state.disabled)
            this.setState({disabled: false});
        else if (!newValue && !this.state.disabled)
            this.setState({disabled: true});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">
                    <h2>TODO App</h2>
                </div>
                <div className='filter-group'>
                    <div className="reminders-number">
                        <h4>{this.props.reminders.length} todos left</h4>
                    </div>
                    <Filter 
                        changeCurrentFilter={this.props.changeCurrentFilter}
                    />
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to…"
                            ref={(c) => { this.taskInput = c; }}
                            onChange={this.addCheckActive}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            defaultValue={moment().add(1, 'm').format('YYYY-MM-DDTHH:mm')}
                            ref={(c) => { this.timeInput = c; }}
                        />
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={(e) => this.addReminder(e)}
                            disabled={this.state.disabled}
                        >
                        Add todo
                        </button>
                    </div>
                    <RemindersList
                        reminders={this.props.reminders}
                        deleteReminder={this.props.deleteReminder}
                        toggleIsEditingRow={this.props.toggleIsEditingRow}
                        isEditing={this.props.isEditing}
                        editReminderText={this.props.editReminderText}
                        doneReminder={this.props.doneReminder}
                        currentFilter={this.props.currentFilter}
                    />
                    <ClearAllButton 
                        reminders={this.props.reminders}
                        clearReminders={this.props.clearReminders}
                    />
                    <ClearDoneButton 
                        reminders={this.props.reminders}
                        clearDoneReminders={this.props.clearDoneReminders}
                    />
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    reminders: state.reminders,
    currentFilter: state.currentFilter
}), { 
        addReminder, 
        deleteReminder, 
        clearReminders, 
        toggleIsEditingRow,
        editReminderText,
        doneReminder,
        clearDoneReminders,
        changeCurrentFilter
    }
)(App);