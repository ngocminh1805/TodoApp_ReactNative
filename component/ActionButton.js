class ActionButtons extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}><Text style={styles.title}>Input To Do Title</Text></View>
                <View style={styles.text_input_container}>
                    <TextInput style={styles.title_textinput}
                        placeholder='Input To Do' />
                </View>
                <View style={styles.container_btn}>

                    <TouchableOpacity style={styles.button_container} onPress={() =>this.props.addTodo('test')}>
                        <Text style={styles.button_text}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_container} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.button_text}>Cancel</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}