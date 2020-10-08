import 'react-native-gesture-handler';
import React from 'react';
import Home from './Home';
import Edit from './Edit';
import Add from './Add';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from '../redux/store';
import {Provider} from 'react-redux';

export default class TodoScreen extends React.Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'To Do List'}}
          />
          <Stack.Screen
            name="Edit"
            options={{title: 'Edit To Do Item'}}
            component={Edit}
          />
          <Stack.Screen
            name="Add"
            options={{title: 'Add To Do Item'}}
            component={Add}
          />
        </Stack.Navigator>
      </Provider>
    );
  }
}
