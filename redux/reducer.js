import { combineReducers } from 'redux'
import {
    ADD_TODO,
    EDIT_TODO,
} from './actions';
import AsyncStorage from '@react-native-community/async-storage';

// Async-Stotrage
// const getData = async () => {
//     try {
//         const jsonvalue = await AsyncStorage.getItem('data');
//         return jsonvalue != null ? JSON.parse(jsonvalue) : null
//     } catch (e) {
//         console.log('read data error');

//     }
// }

// const storeData = async (value) => {
//     try {
//         const jsonvalue = JSON.stringify(value)
//         await AsyncStorage.setItem('data', jsonvalue)
//     } catch (error) {
//         console.log('saving data error');
//     }
// }


// State khởi tạo
const initState = [];


// hàm reducer chỉ định State thay đổi khi  nhận vào các action

function todos(state = initState, action) {
    console.log('test_reducuer: ', action)
    switch (action.type) {
        // action add_todo
        case ADD_TODO:
            return [
                ...state,
                action.data
            ]

        // action edit_todo
        case EDIT_TODO:
            const index = action.index;

            return [
                ...state.slice(0, index),
                action.data,
                ...state.slice(index + 1)
            ]

        default:
            return state
    }


}


const todoApp = combineReducers({
    todos
})

export default todoApp