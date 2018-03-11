import React, { Component } from 'react';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import RemindersList from './Reminders';
import { 
    addReminder, 
    deleteReminder, 
    clearReminders, 
    toggleIsEditingRow 
} from '../actions';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        };
        this.addCheckActive = this.addCheckActive.bind(this);
    }

    addReminder (e) {
        this.props.addReminder(
            this.taskInput.value,
            moment(this.timeInput.value).toDate()
        );
        this.taskInput.value = '';
        this.setState({disabled: true});
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
                            defaultValue={moment(Date.now()).format('YYYY-MM-DDTHH:mm')}
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
                    />
                    {this.props.reminders.length > 1 &&
                        <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => this.props.clearReminders()}
                        >
                            Clear all
                    </button>}
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    reminders: state
}), { 
        addReminder, 
        deleteReminder, 
        clearReminders, 
        toggleIsEditingRow 
    }
)(App);