import { combineReducers } from 'redux'
import {
    ADD_TODO,
    EDIT_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'


const { SHOW_ALL } = VisibilityFilters
const initState = [{ id: Math.random(), title: 'item 1' },
{ id: Math.random(), title: 'item 2' },
{ id: Math.random(), title: 'item 3' }]

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = initState, action) {
    console.log('test_reducuer: ', action)
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.data
            ]
        case EDIT_TODO:
            const index = action.index;

             return [
                 ...state.slice(0,index),
                 action.data,
                 ...state.slice(index+1)
             ]

        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp