import React, {Component} from 'react';

export default class Task extends Component {
  render() {
    return (
      <div className={`list-item ${this.props.task.state}`}>
        <label className="checkbox">
          <input 
          type="checkbox"
          defaultChecked={this.props.task.state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
          />
          <span className="checkbox-custom" onClick={() => this.props.actions.onArchiveTask(this.props.task.id)}></span>
        </label>
        {/* <div className="title">
          <input type="text" value={this.props.task.title} readOnly={true} placeholder="Input title"/>  
        </div> */}
      </div>
    )
  } 
}