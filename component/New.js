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
} from 'react-native';

export default class New extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      images: [],
      isloading: true,
      isrefresh: false,
      page: 0,
      next_page: 1,
    };
  }

  //get data from Api
  getDataUsingGet = async () => {
    await fetch(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=7b26680fc657471680d528a4ddb62ba8&page=' +
        this.state.next_page,
      {
        method: 'GET',
        //Request Type
      },
    )
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        if (responseJson.status == 'ok') {
          console.log('get data from api', responseJson);
          this.setState({
            articles: [...this.state.articles, ...responseJson.articles],
            isloading: false,
            isrefresh: false,
            page: this.state.page + 1,
            next_page: this.next_page + 1,
          });
          console.log('update state', this.state);
        } else {
          alert('Hết Dữ Liệu');
          this.setState({isloading: false});
        }
      });
    //If response is not in json then in error
  };

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

  // handle refresh
  hadleRefresh = () => {
    this.setState({isrefresh: true, page: 1, articles: []}, () =>
      this.getDataUsingGet(),
    );
  };

  // load more data when end list
  handleLoadmore = () => {
    console.log('hadleLoadmore');
    this.setState({isloading: true}, () => this.getDataUsingGet());
  };

  // footer loading end list
  renderFooter = () => {
    //console.log("render footer", this.state)
    return this.state.isloading ? (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    ) : null;
  };

  // render items article
  // renderItem = (item) => {
  //     return (
  //         <View style={items.container}>
  //             <Text style={items.article_title} > {item.title} </Text>
  //             <Text style={items.article_author}> author: {item.author} </Text>
  //             <View style={items.container_description}>

  //                 <Text style={items.article_des} > {item.description.slice(0, 120)}...
  //                     <Text style={items.hyperLink}
  //                         onPress={() => { Linking.openURL(item.url) }}>
  //                         [Read More]

  //                         </Text>
  //                 </Text>

  //                 <Image style={items.artiscal_image} source={{ uri: item.urlToImage }}></Image>
  //             </View>
  //         </View>
  //     )
  // }

  // render Item with image api
  renderItem = (item,index) => {
    //   console.log('Url imagas',this.changeUrl(item.download_url, item.id));
    return (
      <View style={image_item.container}>
        <View style={image_item.des_container}>
          <Text style = {image_item.images_title}>{index}</Text>
          <Text style = {image_item.image_author}>{item.author}</Text>
          <Text>{item.url}</Text>
        </View>
        <Image source= {{uri: this.changeUrl(item.download_url, item.id)}} style={image_item.images} />
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
        {/* <ScrollView style={styles.scrollcontainer}> */}
        <FlatList
          style={styles.flatlist}
          data={this.state.images}
          renderItem={({item,index}) => this.renderItem(item,index)}
          keyExtractor={(item) => {
            this.state.articles.indexOf(item);
          }}
          // --- Loadmore and pull to refesh ---   

          // onEndReachedThreshold={0.5}
          // onEndReached={() => this.handleLoadmore()}
          // ListFooterComponent={() => this.renderFooter()}
          // refreshing = {this.state.isrefresh}
          // onRefresh = {() => this.hadleRefresh()}
        ></FlatList>
        {/* </ScrollView> */}
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
    height: 100,
    width: 100,
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
