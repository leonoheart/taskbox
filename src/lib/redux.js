import {createStore} from 'redux'

//actions
export const actions = {
    ARCHIVE_TASK: 'Archive_TASK', 
    PIN_TASK : 'PIN_TASK'
}

export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id })
export const pinTask = id => ({ type: actions.PIN_TASK, id })

function taskStateReducer(taskState) {
    return (state, action) => {
        return {
            ...state,
            tasks: state.tasks.map(
                task => (task.id == action.id ? {...task, state: taskState } : task)
            )
        }
    }
}

//reducer
export const reducer = (state, action) => {
    switch (action.type) {
        case actions.ARCHIVE_TASK:
            return taskStateReducer('TASK_ARCHIVED')(state, action)
        case actions.PIN_TASK:
            return taskStateReducer('TASK_PINNED')(state, action)
        default:
            return state
    }
}

//default values
const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_BOX' },
    { id: '2', title: 'Something more', state: 'TASK_BOX' },
    { id: '3', title: 'Something else', state: 'TASK_BOX' },
    { id: '4', title: 'Something again', state: 'TASK_BOX' }
]

export default createStore(reducer, {tasks: defaultTasks})

