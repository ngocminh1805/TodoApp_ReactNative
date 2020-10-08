// các action sử dụng

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const ALL_DATA = 'ALL_DATA';

export function addTodo(text) {
  console.log('test_addTodo');
  return {
    type: ADD_TODO,
    data: {
      id: Date.now(),
      title: text,
    },
  };
}

export function editTodo(index, data) {
  return {
    type: EDIT_TODO,
    index: index,
    data: {
      id: data.id,
      title: data.title,
    },
  };
}

export function allData(data) {
  return {
    type: ALL_DATA,
    data: data,
  };
}
