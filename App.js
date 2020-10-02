import 'react-native-gesture-handler';
import React from 'react';
import Home from './component/Home'
import Edit from './component/Edit'
import Add from './component/Add'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default class App extends React.Component {


  render() {

    const Stack = createStackNavigator();


    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" options={{ title: "Edit To Do Item" }} component={Edit} />
          <Stack.Screen name="Add" options={{ title: "Add To Do Item" }} component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

