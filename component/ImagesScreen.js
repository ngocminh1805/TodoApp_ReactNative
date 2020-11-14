import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Images from './Images'

export default class ImagesScreen extends React.Component {

    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen name='Image' options={{ title: 'Image' }} component={Images} />
            </Stack.Navigator>
        )
    }
}