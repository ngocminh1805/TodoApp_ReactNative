import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';




export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:
        [{ id: 1, title: "item 1" },
        { id: 2, title: "item 2" },
        { id: 3, title: "item 3" },
        { id: 4, title: "item 4" },
        { id: 5, title: "item 5" },
        { id: 6, title: "item 6" },
        { id: 7, title: "item 7" },
        { id: 8, title: "item 8" },
        { id: 9, title: "item 9" },
        { id: 10, title: "item 10" },
        { id: 11, title: "item 11" },
        { id: 12, title: "item 12" },
        { id: 13, title: "item 13" },
        { id: 14, title: "item 14" },
        { id: 15, title: "item 15" }]
    }
  }




  render() {

    const { data } = this.state;

    const onAddPress = () => {
      this.props.navigation.navigate('Add');
    }

    const onEditPress = () => {
      this.props.navigation.navigate('Edit');
    }

    return (

      <View style={styles.container}>
        <View>
          <Text style={styles.title}> ToDoList </Text>
        </View >
        <ScrollView style={styles.scrollcontainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            style={{ marginBottom: 20 }}

            renderItem={({ item }) => {
              return (
                <View style={items.container}>
                  <Text style={items.todoTitle}>
                    {item.title}
                  </Text>

                  <TouchableOpacity onPress={() => {
                    Alert.alert(
                      'Remove ToDo',
                      'Do you want remove ' + item.title,
                      [
                        { text: 'yes', onPress: () => { const index = data.indexOf(item); this.setState(data.splice(index, 1)) } },
                        { text: 'no', style: 'cancel' }
                      ],
                      {
                        cancelable: true
                      }
                    )
                  }}>
                    <Image source={require('../assets/delete.png')} style={items.delete_btn} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { onEditPress() }}>
                    <Image source={require('../assets/edit.png')} style={items.edit_btn} />
                  </TouchableOpacity>
                </View>)
            }}>
          </FlatList>
        </ScrollView>

        <TouchableOpacity style={styles.add_btn} onPress={() => { onAddPress() }}>
          <Text style={styles.add_btn_text} > + </Text>
        </TouchableOpacity>

      </View>


    );
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
    marginBottom: 5,
    borderColor: '#000',
    borderRadius: 20,
    borderWidth: 4,
  },

  title: {
    fontSize: 30,
    alignItems: 'center',
    padding: 20,
    fontWeight: "bold",
  },

  add_btn: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },

  add_btn_text: {
    fontSize: 24,
    color: '#fff'
  }
});

const items = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 10,
    borderRadius: 10
  },
  delete_btn: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: 'center'
  },
  todoTitle: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  edit_btn: {
    width: 30,
    height: 30,
    marginRight: 5
  }

});
