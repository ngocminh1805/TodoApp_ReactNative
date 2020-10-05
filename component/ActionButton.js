 import React from 'react'
 import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
 
 export default class ActionButtons extends React.Component {
    render() {
        console.log('action button', this.props)
        return (
            
                <View style={styles.container_btn}>

                    <TouchableOpacity style={styles.button_container} onPress={() =>this.props.onAdd()}>
                        <Text style={styles.button_text}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_container} onPress={() =>this.props.onCancel()}>
                        <Text style={styles.button_text}>Cancel</Text>
                    </TouchableOpacity>
                </View>

        );
    }
}
const styles = StyleSheet.create({
  
    container_btn: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,

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

})