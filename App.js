import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  createAppContainer
} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'native-base'
import MainScreen from './component/MainScreen';
// export default class App extends React.Component{
//   render(){
//     return(
//       <AppStackNavigator/>
//     )
//   }
// }
// export default class App extends React.Component{
//   render(){
//     return(
//       <MainScreen/>
//     );
//   }
// }
const AppStackNavigator = createStackNavigator({
  Main: {
    screen:MainScreen,
    navigationOptions: {
      headerTitleStyle: { alignSelf: 'center' },
      headerLeft:<FontAwesome name="camera" style={{paddingLeft:10}} size={23}/>,
      title:"Instagram",
      headerRight:<FontAwesome name="send" style={{paddingRight:10}} size={23}/>
  },
  }
});
const App = createAppContainer(AppStackNavigator);

export default App;