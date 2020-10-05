import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default class New extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollcontainer}>
                    <Text> hello world </Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2
    },

    scrollcontainer: {
        flex: 1,
        padding: 16,
        marginBottom: 0,
        borderColor: '#000',
        borderRadius: 20,
        borderWidth: 4,
    },
})