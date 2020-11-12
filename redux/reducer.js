import {combineReducers} from 'redux';
import {ADD_TODO, EDIT_TODO, ALL_DATA} from './actions';
import AsyncStorage from '@react-native-community/async-storage';

// Async-Stotrage
const getData = async () => {
  try {
    const jsonvalue = await AsyncStorage.getItem('data');
    console.log('get data', JSON.parse(JSON.stringify(jsonvalue)));
    const data = JSON.parse(jsonvalue);
    return data;
  } catch (e) {
    console.log('read data error');
  }
};

const storeData = async (value) => {
  try {
    console.log('value', value);
    const jsonvalue = JSON.stringify(value);
    await AsyncStorage.setItem('data', jsonvalue);
    console.log('saving data success', jsonvalue);
  } catch (error) {
    console.log('saving data error');
  }
};

// State khởi tạo

const initState = [
  {id: Math.random(),title: 'Todo 1'},
  {id: Math.random(),title: 'Todo 2'},
  {id: Math.random(),title: 'Todo 3'},
  {id: Math.random(),title: 'Todo 4'},
  {id: Math.random(),title: 'Todo 5'},
];

// hàm reducer chỉ định State thay đổi khi  nhận vào các action

function todos(state = initState, action) {
  console.log('test_reducuer: ', action);
  switch (action.type) {
    // action add_todo
    case ADD_TODO:
      storeData([...state, action.data]);
      return [...state, action.data];

    // action edit_todo
    case EDIT_TODO:
      const index = action.index;
      storeData([
        ...state.slice(0, index),
        action.data,
        ...state.slice(index + 1),
      ]);

      return [...state.slice(0, index), action.data, ...state.slice(index + 1)];

    //all data
    case ALL_DATA:
      return;
      action.data;

    default:
      storeData(state);
      return state;
  }
}

const todoApp = combineReducers({
  todos,
});

export default todoApp;
