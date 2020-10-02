import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}><Text style={styles.title}>Edit to do title</Text></View>
                <View style={styles.text_input_container}>
                    <TextInput style={styles.title_textinput} placeholder="Item Title" />
                </View>
                <View style={styles.container_btn}>

                    <TouchableOpacity style={styles.button_container} onPress={() => { alert("Edit Item") }}>
                        <Text style={styles.button_text}> Save </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_container} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.button_text}> Cancel </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16

    },
    container_btn: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,

    },

    title_textinput: {
        height: 50,
        width: 300,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10
    },

    text_input_container: {
        alignItems: "center"

    },

    button_container: {
        elevation: 8,
        backgroundColor: "#000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 150,
        alignItems: "center"

    },
    button_text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

    title: {
        fontSize: 30,
        alignItems: "center",
        marginBottom: 50,
        fontWeight: 'bold',
    }

})
