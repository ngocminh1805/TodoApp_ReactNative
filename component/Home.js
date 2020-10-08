import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import todoItem from './todoItem';
import AsyncStorage from '@react-native-community/async-storage';
import {allData} from '../redux/actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_get: [{id: '', title: ''}],
    };
    console.log('props', this.props);
    console.log('home state', this.state);
  }

  getData = async () => {
    const jsonvalue = await AsyncStorage.getItem('data');
    console.log('get data', JSON.parse(JSON.stringify(jsonvalue)));
    const datas = JSON.parse(JSON.stringify(jsonvalue));
    console.log('data', datas);
    this.setState({data_get: datas});
    this.props.allData(this.state.data_get);
  };

  componentDidMount() {
    this.getData();
  }

  // render todoitem
  renderItemn = (item) => {
    const data = this.props.todos;
    console.log('item render', item);
    return (
      <View style={items.container}>
        <Text style={items.todoTitle}>{item.title}</Text>

        <TouchableOpacity onPress={() => this.onDeletePress(item)}>
          <Image
            source={require('../assets/delete.png')}
            style={items.delete_btn}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.onEditPress(item)}>
          <Image
            source={require('../assets/edit.png')}
            style={items.edit_btn}
          />
        </TouchableOpacity>
      </View>
    );
  };

  // press Add
  onAddPress = () => {
    const data = this.props.todos;
    this.props.navigation.navigate('Add');
  };
  // press Edit
  onEditPress = (item) => {
    const data = this.props.todos;
    this.props.navigation.navigate('Edit', {index: data.indexOf(item)});
  };

  //press Delete
  onDeletePress = (item) => {
    const data = this.props.todos;
    Alert.alert(
      'Remove ToDo',
      'Do you want remove ' + item.title,
      [
        {
          text: 'yes',
          onPress: () => {
            const index = data.indexOf(item);
            this.setState(data.splice(index, 1));
          },
        },
        {text: 'no', style: 'cancel'},
      ],
      {
        cancelable: true,
      },
    );
  };

  // render Screen Home
  render() {
    const data = this.props.todos;
    console.log('test home screen');
    console.log('test_render:', this.props.todos);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollcontainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            style={styles.flatlist}
            renderItem={({item}) => this.renderItemn(item)}
          />
        </ScrollView>

        <TouchableOpacity
          style={styles.add_btn}
          onPress={() => this.onAddPress()}>
          <Text style={styles.add_btn_text}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    allData: (data) => dispatch(allData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },

  scrollcontainer: {
    flex: 1,
    padding: 16,
    marginBottom: 0,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 4,
  },

  title: {
    fontSize: 30,
    alignItems: 'center',
    padding: 20,
    fontWeight: 'bold',
  },

  add_btn: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 40,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },

  add_btn_text: {
    fontSize: 24,
    color: '#fff',
  },

  flatlist: {
    marginBottom: 0,
  },
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
    shadowOffset: {width: 0, height: 0},
    marginBottom: 10,
    borderRadius: 10,
  },
  delete_btn: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: 'center',
  },
  todoTitle: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  edit_btn: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});
