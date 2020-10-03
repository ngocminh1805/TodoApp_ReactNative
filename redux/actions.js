export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export function setVisibilityFilter(filter) {
   
    return { type: SET_VISIBILITY_FILTER, filter }
}


export function addTodo(text) {
    console.log('test_addTodo')
    return { type: ADD_TODO, data:{
        id: Date.now(),
        title : text
    } }
}

export function editTodo(index,text) {
    return { type: EDIT_TODO,index: index, 
        data:{
        id: Date.now(),
        title : text
    }}
}