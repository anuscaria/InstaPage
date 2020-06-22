import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
class ProfileTab extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Profle tab
                </Text>
            </View>
        )
    }
}
export default ProfileTab;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})