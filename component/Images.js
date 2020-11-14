import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

export default class Images extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
      images: [],
      page: 0,
      next_page: 1,
    };
  }



  // get api image

  getImage = async () => {
    this.setState({page: this.state.page + 1});
    await fetch('https://picsum.photos/v2/list?page='+this.state.page.toString()+'&limit=50', {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        // console.log('Image', responseJson);
        this.setState({images: this.state.images.concat(responseJson)});
      });
  };

  
  // render Item with image api
  renderItem = (item,index) => {
    //   console.log('Url imagas',this.changeUrl(item.download_url, item.id));
    return (
      <View style={image_item.container}>
        <Image source= {{uri:item.download_url}} style={image_item.images} />
      </View>
    );
  };

  // change api link to change size image load

  changeUrl = (url,id) => {
    const index = url.indexOf(id)
    var str = url.slice(0,index)
    str = str.concat(""+id+"/200")
    return str;

  }

  // render screen
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={this.state.images}
          renderItem={({item,index}) => this.renderItem(item,index)}
          keyExtractor={(item) => {
            this.state.images.indexOf(item);
          }}
        ></FlatList>
        <View style={styles.button_view}>
          <TouchableOpacity
            style={styles.getData_btn_container}
            onPress={() => this.getImage()}>
            <Text style={styles.getData_btn_title}>Get News</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 2,
    paddingLeft: 2,
  },

  scrollcontainer: {
    flex: 1,
    padding: 10,
    marginBottom: 0,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 4,
    marginBottom: 5,
  },

  getData_btn_container: {
    elevation: 8,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 150,
    alignItems: 'center',
  },

  getData_btn_title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  button_view: {
    alignItems: 'center',
    marginBottom: 5,
  },

  flatlist: {
    marginBottom: 5,
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 30,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 4,
  },

  loading: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

const items = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 5,
  },

  container_description: {
    flexDirection: 'row',
    borderColor: '#000',
    borderTopWidth: 1,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    padding: 2,
  },

  artiscal_image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  article_des: {
    width: 200,
    height: 100,
    padding: 2,
    flex: 1,
  },
  article_title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    alignSelf: 'center',
  },
  article_author: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  hyperLink: {
    color: 'red',
  },
});

const image_item = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 5,
    padding:10
  },
  des_container: {
    flex: 1,
  },
  images: {
    height: 300,
    width: Dimensions.get("window").width - 45,
    borderRadius:4
  },
  images_title:{
      fontSize:20,
      fontWeight:"bold",
  },
  image_author:{
      fontSize: 10,
      color: "#53ba82",
      marginBottom:20
  },
  images_url:{

  }


});
