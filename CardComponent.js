import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { Card,CardItem,Thumbnail,Body, Left, Right, Button, Icon} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var stringValue;
var stringValuefull;
class CardComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            moreLoad : false
        }
    }
    render(){
        
        const data = [
            {
              "id": "I4yuiN27W14",
              "channelname": "",
              "title": "How To Paint Waves - Lesson 3 - Wet On Dry",
              "high thumbnail": "https://i.ytimg.com/vi/I4yuiN27W14/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/I4yuiN27W14/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/I4yuiN27W14/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "SfuVEviZhsg",
              "channelname": "",
              "title": "DIY: 5 Easy Canvas Decor & Gift Ideas",
              "high thumbnail": "https://i.ytimg.com/vi/SfuVEviZhsg/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/SfuVEviZhsg/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/SfuVEviZhsg/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "PWdXYvIeEjE",
              "channelname": "",
              "title": "Painting Tiny Canvases",
              "high thumbnail": "https://i.ytimg.com/vi/PWdXYvIeEjE/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/PWdXYvIeEjE/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/PWdXYvIeEjE/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "5GpAXo2j0z0",
              "channelname": "",
              "title": "Surreal Fantasy Tree Acrylic Painting Abstract Silhouette Landscape",
              "high thumbnail": "https://i.ytimg.com/vi/5GpAXo2j0z0/sddefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/5GpAXo2j0z0/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/5GpAXo2j0z0/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "kQ_c74mq-og",
              "channelname": "",
              "title": "Wisteria Willow Tree Q Tip Painting Technique for BEGINNERS EASY Acrylic Painting",
              "high thumbnail": "https://i.ytimg.com/vi/kQ_c74mq-og/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/kQ_c74mq-og/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/kQ_c74mq-og/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "2Flv9YkIyas",
              "channelname": "",
              "title": "DIY| Z Gallerie Inspired Glitter Wall Canvas Art",
              "high thumbnail": "https://i.ytimg.com/vi/2Flv9YkIyas/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/2Flv9YkIyas/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/2Flv9YkIyas/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "5bary3TU3nI",
              "channelname": "",
              "title": "DIY Colorful Tree Canvas Painting ? Room Decor",
              "high thumbnail": "https://i.ytimg.com/vi/5bary3TU3nI/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/5bary3TU3nI/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/5bary3TU3nI/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "8PXzYtpPOX0",
              "channelname": "",
              "title": "Beginner Acrylic Tutorial Abstract Butterfly Painting",
              "high thumbnail": "https://i.ytimg.com/vi/8PXzYtpPOX0/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/8PXzYtpPOX0/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/8PXzYtpPOX0/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "yNx5co12pIA",
              "channelname": "",
              "title": "Sue Gait ; How to use different brushes and their names",
              "high thumbnail": "https://i.ytimg.com/vi/yNx5co12pIA/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/yNx5co12pIA/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/yNx5co12pIA/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "ZRwFbOMDcw4",
              "channelname": "",
              "title": "10 Acrylic Painting Tips for Beginners",
              "high thumbnail": "https://i.ytimg.com/vi/ZRwFbOMDcw4/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/ZRwFbOMDcw4/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/ZRwFbOMDcw4/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "L2Ds7umWezQ",
              "channelname": "",
              "title": "Painting on 22 Tiny Canvases!",
              "high thumbnail": "https://i.ytimg.com/vi/L2Ds7umWezQ/sddefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/L2Ds7umWezQ/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/L2Ds7umWezQ/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "GYxGEHCcl98",
              "channelname": "",
              "title": "3 Simple Tricks for Unique Acrylic Textures",
              "high thumbnail": "https://i.ytimg.com/vi/GYxGEHCcl98/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/GYxGEHCcl98/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/GYxGEHCcl98/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "47uqmgx67j0",
              "channelname": "",
              "title": "Easy canvas painting for kids",
              "high thumbnail": "https://i.ytimg.com/vi/47uqmgx67j0/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/47uqmgx67j0/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/47uqmgx67j0/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "AWjdhWFtVaY",
              "channelname": "",
              "title": "Drip Paint Canvas // DIY",
              "high thumbnail": "https://i.ytimg.com/vi/AWjdhWFtVaY/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/AWjdhWFtVaY/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/AWjdhWFtVaY/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "Qrdv15VO6sQ",
              "channelname": "",
              "title": "Easy acrylic painting lesson | City Walk Girl in the Rain | Umbrella Art",
              "high thumbnail": "https://i.ytimg.com/vi/Qrdv15VO6sQ/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/Qrdv15VO6sQ/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/Qrdv15VO6sQ/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "BT18w1XrPnk",
              "channelname": "",
              "title": "PAINTING TUTORIAL Acrylic Ocean for Beginners  | Katie Jobling Art",
              "high thumbnail": "https://i.ytimg.com/vi/BT18w1XrPnk/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/BT18w1XrPnk/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/BT18w1XrPnk/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "bz5ST7hCB-g",
              "channelname": "",
              "title": "DIY- Mandala on Canvas",
              "high thumbnail": "https://i.ytimg.com/vi/bz5ST7hCB-g/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/bz5ST7hCB-g/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/bz5ST7hCB-g/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "NqDXKm7WbRI",
              "channelname": "",
              "title": "15 Arts & Crafts Hacks You'd Wish You'd Known Sooner!",
              "high thumbnail": "https://i.ytimg.com/vi/NqDXKm7WbRI/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/NqDXKm7WbRI/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/NqDXKm7WbRI/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "a_WVM5EJnoA",
              "channelname": "",
              "title": "Lady with Black Umbrella Acrylic Painting",
              "high thumbnail": "https://i.ytimg.com/vi/a_WVM5EJnoA/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/a_WVM5EJnoA/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/a_WVM5EJnoA/hqdefault.jpg",
              "tags": [
                
              ]
            },
            {
              "id": "DwEgbzslecs",
              "channelname": "",
              "title": "How to Blend Acrylic Paints - Narrated Demonstration",
              "high thumbnail": "https://i.ytimg.com/vi/DwEgbzslecs/maxresdefault.jpg",
              "low thumbnail": "https://i.ytimg.com/vi/DwEgbzslecs/default.jpg",
              "medium thumbnail": "https://i.ytimg.com/vi/DwEgbzslecs/hqdefault.jpg",
              "tags": [
                
              ]
            }
          ]
         
         // console.log("data...",data[this.props.imageSource]['title'].lenght);
          var s= data[this.props.imageSource]['title'];
          var rx = /[a-z]/gi;
          var m = s.match(rx);
          
          if (m) {
           // console.log(m.length);
           if(m.length >=20){
            stringValue= data[this.props.imageSource]['title'].match(/.{1,20}/g)
           }else{
            stringValue = data[this.props.imageSource]['title'];
           }
           stringValuefull = data[this.props.imageSource]['title'];
          }
         
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.png')}/>
                        <Body>
                            <Text>Anu</Text>
                            <Text>Jun 18, 2020</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem  cardBody>
                <Image source={{uri:data[this.props.imageSource]['medium thumbnail']}}style={{height:200,width:null,flex:1}}/>
                    {/* <Image source={uri:{data[this.props.imageSource]['medium thumbnail']} }style={{height:200,width:null,flex:1}}/> */}
                </CardItem>
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent><FontAwesome name="heart-o" style={{color:'black'}} size={20} /></Button>
                        <Button transparent><FontAwesome name="wechat" style={{color:'black'}} size={20} /></Button>
                        <Button transparent><FontAwesome name="send" style={{color:'black'}} size={20} /></Button>
                    </Left>
                </CardItem>
                <CardItem style={{height:20}}>
                    <Text>{this.props.likes}</Text>
                </CardItem>
                <CardItem>
                    {this.state.moreLoad == false ? <Body>
                        <Text>
                            <Text style={{fontWeight:'bold'}}>Anu </Text>
                            {stringValue[0]}<Text style={{fontWeight:'bold'}} onPress={() => {
                                this.setState({
                                    moreLoad: true
                                })
                            }}>More</Text>
                        </Text>
                    </Body> :
                    <Body>
                    <Text>
                        <Text style={{fontWeight:'bold'}}>Anu </Text>
                        {stringValuefull}<Text style={{fontWeight:'bold'}} onPress={() => {
                                this.setState({
                                    moreLoad: false
                                })
                            }}>Less</Text>
                    </Text>
                </Body>
                }
                    
                </CardItem>
            </Card>
        )
    }
}
export default CardComponent;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})