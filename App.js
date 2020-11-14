import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native'
import NewScreen from './component/NewScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TodoScreen from './component/TodoScreen'
import ImagesScreen from './component/ImagesScreen'



export default class App extends React.Component {


  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{ labelStyle: { fontSize: 15, fontWeight: 'bold', color: '#000' } }} >
          <Tab.Screen name="Todo"
            component={TodoScreen}
            options={{
              tabBarIcon: () => (
                <Image source={require('./assets/to-do-list.png')}
                  resizeMode='contain'
                  style={{ width: 20, height: 20 }} />
              )
            }}
          />
          <Tab.Screen name="New" component={NewScreen}
            options={{
              tabBarIcon: () => (
                <Image source={require('./assets/news.png')}
                  resizeMode='contain'
                  style={{ width: 20, height: 20 }} />
              )
            }} />
              <Tab.Screen name="Image" component={ImagesScreen}
            options={{
              tabBarIcon: () => (
                <Image source={require('./assets/image.png')}
                  resizeMode='contain'
                  style={{ width: 20, height: 20 }} />
              )
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

