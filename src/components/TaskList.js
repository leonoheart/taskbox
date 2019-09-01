import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Task from './Task'
import { archiveTask, pinTask } from '../lib/redux'

export class PureTaskList extends Component {
    render() {
        const loading = this.props.loading
        const tasks = this.props.tasks
        const events = {
            onPinTask: this.props.onPinTask,
            onArchive: this.props.onArchive
        }
        const loadingRow = (
            <div className="loading-item">
                <span className="glow-checkbox"></span>
                <span className="glow-text">
                    <span>Loading</span><span>cool</span><span>state</span>
                </span>
            </div>
        )

        if(loading) {
            return <div className="list-items">
                {loadingRow}
                {loadingRow}
                {loadingRow}
                {loadingRow}
                {loadingRow}
                {loadingRow}
            </div>
        }

        if(tasks.length === 0) {
            return (
                <div className='list-items'>
                    <div className="wrapper-message">
                        <span className="icon-check"></span>
                        <div className="title-message">You have no tasks</div>
                        <div className="subtitle-message">Sit back and relax</div>
                    </div>
                </div>      
            )
        }

        const tasksInOrder = [
            ...tasks.filter(t => t.state === 'TASK_PINNED'),
            ...tasks.filter(t => t.state !== 'TASK_PINNED')
        ]

        return (
            <div className='list-item'>
                {tasksInOrder.map(task => <Task key={task.id} task={task} {...events}/>)}
            </div>
        )
    }
}

PureTaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onPinTask: PropTypes.func.isRequired,
    onArchiveTask: PropTypes.func.isRequired
}

PureTaskList.defaultProps = {
    loading: false
}

export default connect(
    ({tasks}) => ({
        tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')
    }),
    dispatch =>({
        onArchiveTask: id => dispatch(archiveTask(id)),
        onAPinTask: id => dispatch(pinTask(id)),
    })
)(PureTaskList)