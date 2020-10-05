import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import New from './New'

export default class NewScreen extends React.Component {

    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen name='New' options={{ title: 'New' }} component={New} />
            </Stack.Navigator>
        )
    }
}


