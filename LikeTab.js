import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
class LikeTab extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Like tab
                </Text>
            </View>
        )
    }
}
export default LikeTab;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})