import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CardComponent from '../CardComponent'
import { Container, Content } from 'native-base';
class HomeTab extends React.Component{
    static navigationOption = {
        tabBarIcon:({tintColor}) =>(
            <FontAwesome name = "home" size={15}  style={{color :tintColor}}/>
        )
    }
    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <CardComponent imageSource='1' likes='101'/>
                    <CardComponent imageSource="2" likes='102'/>
                    <CardComponent imageSource="3" likes='103'/>
                    <CardComponent imageSource="4" likes='104'/>
                    <CardComponent imageSource="5" likes='105'/>
                    <CardComponent imageSource="6" likes='106'/>
                    <CardComponent imageSource="7" likes='107'/>
                    <CardComponent imageSource="8" likes='108'/>
                    <CardComponent imageSource="9" likes='109'/>
                    <CardComponent imageSource="10" likes='110'/>
                    <CardComponent imageSource="11" likes='111'/>
                    <CardComponent imageSource="12" likes='112'/>
                    <CardComponent imageSource="13" likes='113'/>
                    <CardComponent imageSource="14" likes='114'/>
                    <CardComponent imageSource="15" likes='115'/>
                </Content>
            </Container>
        )
    }
}
export default HomeTab;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})