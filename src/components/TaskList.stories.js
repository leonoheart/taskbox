import React from 'react'
import {storiesOf} from '@storybook/react'
import { Provider } from 'react-redux'

import PureTaskList from './TaskList'
import {task, actions} from './Task.stories'
import createStore from '../lib/redux'

export const defaultTasks = [
    { ...task, id: '1', title: 'Task 1'},
    { ...task, id: '2', title: 'Task 2'},
    { ...task, id: '3', title: 'Task 3'},
    { ...task, id: '4', title: 'Task 4'},
    { ...task, id: '5', title: 'Task 5'},
    { ...task, id: '6', title: 'Task 6'}
]

export const withPinnedTasks = [
    ...defaultTasks.slice(0, 5),
    {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'}
]

 let store = createStore

storiesOf('TaskList', module)
    .addDecorator(story => (
        <Provider store={store} style={{padding: "3rem"}}>
            {story()}
        </Provider>))
    .add('default', () => <PureTaskList tasks={defaultTasks} {...actions}/>)
    .add('withPinnedTasks', () => <PureTaskList tasks={withPinnedTasks} {...actions}/>)
    .add('loading', () => <PureTaskList loading tasks={[]} {...actions}/>)
    .add('empty', () => <PureTaskList tasks={[]} {...actions}/>)