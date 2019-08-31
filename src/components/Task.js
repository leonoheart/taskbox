import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class Task extends Component {
  render() {
    const task = this.props.task
    const onPinTask = this.props.onPinTask
    const onArchiveTask = this.props.onArchiveTask

    return (
      <div className={`list-item ${task.state}`}>
        <label className="checkbox">
          <input 
          type="checkbox"
          defaultChecked={task.state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
          />
          <span className="checkbox-custom" onClick={() => onArchiveTask(task.id)}></span>
        </label>

        <div className="title">
          <input type="text" value={task.title} readOnly={true} placeholder="Input title"/>  
        </div>

        <div className="actions" onClick={event => event.stopPropagation()}>
          {
            task.state !== 'TASK_ARCHIVED' && (
              <a onClick={() => onPinTask(task.id)}>
                <span className={`icon-star`}></span>
              </a>
            )
          }
        </div>
      </div>
    )
  } 
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state:PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
}