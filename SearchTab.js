import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
 class SearchTab extends React.Component{
     render(){
         return(
             <View style={styles.container}>
                 <Text>Search tab</Text>
             </View>
         )
     }
 }
 export default SearchTab;
 const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})