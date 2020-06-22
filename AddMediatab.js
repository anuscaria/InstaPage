import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
class AddMediaTab extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Add media tab
                </Text>
            </View>
        )
    }
}
export default AddMediaTab;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})