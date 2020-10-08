import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Linking, ActivityIndicator, } from 'react-native'


export default class New extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            isloading: true,
            isrefresh: false,
            page: 0,
            next_page: 1
        }
    }

    //get data from Api
    getDataUsingGet = async () => {
        await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=7b26680fc657471680d528a4ddb62ba8&page=' + this.state.next_page, {
            method: 'GET',
            //Request Type
        })
            .then((response) => response.json())
            //If response is in json then in success 
            .then((responseJson) => {
                //Success
                if (responseJson.status == 'ok') {
                    console.log("get data from api", responseJson);
                    this.setState({
                        articles: [...this.state.articles, ...responseJson.articles],
                        isloading: false,
                        isrefresh: false,
                        page: this.state.page + 1,
                        next_page: this.next_page + 1
                    })
                    console.log("update state", this.state)
                }
                else {
                    alert('Hết Dữ Liệu')
                }
            })
        //If response is not in json then in error
    }

    // get data from articles
    // loadDatafromState = () => {
    //     const arr = this.state.articles;
    //     if(this.state.data < this.state.articles){
    //         this.setState({
    //             data: this.state.data.concat(arr.slice(this.state.page*10,this.state.page*10+10))  ,
    //             isloading: false,
    //             page: this.state.page + 1
    //         })
    //         console.log('Data into State', this.state);
    //     }
    //     else{
    //         alert('Hết Data')
    //         this.setState({isloading:false})
    //     }
    // }

    // onRefresh
    // refreshData = async () =>{
    //     const arr = this.state.articles
    //     await this.setState({data:this.state.data.concat(arr.slice(this.state.page*10,this.state.page*10+10)) , isrefresh:false , page:this.state.page+1})
    //     console.log("reload",this.state)
        
    // }

    // handle refresh
    hadleRefresh = () =>{
        this.setState({isrefresh:true, page:1 ,articles:[]},() => this.getDataUsingGet())

    }


    // load more data when end list
    handleLoadmore = () => {
        console.log("hadleLoadmore");
        this.setState({ isloading: true }, () => this.getDataUsingGet())
    }

    // footer loading end list
    renderFooter = () => {
        //console.log("render footer", this.state)
        return (
            this.state.isloading ?
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color='#000' />
                </View> : null
        )

    }

    // render items
    renderItem = (item) => {
        return (
            <View style={items.container}>
                <Text style={items.article_title} > {item.title} </Text>
                <Text style={items.article_author}> author: {item.author} </Text>
                <View style={items.container_description}>

                    <Text style={items.article_des} > {item.description.slice(0, 120)}...
                        <Text style={items.hyperLink}
                            onPress={() => { Linking.openURL(item.url) }}>
                            [Read More]

                            </Text>
                    </Text>

                    <Image style={items.artiscal_image} source={{ uri: item.urlToImage }}></Image>
                </View>
            </View>
        )
    }

    // render screen 
    render() {

        return (

            <View style={styles.container}>
                {/* <ScrollView style={styles.scrollcontainer}> */}
                <FlatList
                    style={styles.flatlist}
                    data={this.state.articles}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item) => { this.state.articles.indexOf(item) }}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => this.handleLoadmore()}
                    ListFooterComponent={() => this.renderFooter()}
                    refreshing = {this.state.isrefresh}
                    onRefresh = {() => this.hadleRefresh()}
                >
                </FlatList>
                {/* </ScrollView> */}
                <View style={styles.button_view}>
                    <TouchableOpacity style={styles.getData_btn_container}
                        onPress={() => this.getDataUsingGet()}>
                        <Text style={styles.getData_btn_title}>Get News</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 2,
        paddingLeft: 2
    },

    scrollcontainer: {
        flex: 1,
        padding: 10,
        marginBottom: 0,
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 4,
        marginBottom: 5
    },

    getData_btn_container: {
        elevation: 8,
        backgroundColor: "#000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 150,
        alignItems: "center"
    },

    getData_btn_title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

    button_view: {
        alignItems: 'center',
        marginBottom: 5
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
        marginBottom: 20
    }

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
        borderRadius: 5
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
        alignSelf: 'center'

    },
    article_author: {
        alignSelf: "flex-end",
        padding: 5,

    },
    hyperLink: {
        color: 'red'
    }


})