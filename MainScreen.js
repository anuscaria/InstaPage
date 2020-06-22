import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';
import {
    createAppContainer
  } from 'react-navigation';
import {Icon} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeTab from './screens/HomeTab'
import SearchTab from './screens/SearchTab'
import AddMediaTab from './screens/AddMediatab'
import LikeTab from './screens/LikeTab'
import ProfileTab from './screens/ProfileTab'

// class MainScreen extends React.Component{
//     render(){
//         return(
//             <AppTabNavigator/>
//         )
//     }
// }
// export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({
    HomeTab:{
        screen:HomeTab,
        navigationOptions:{
            tabBarIcon:({tintColor}) =>(
                <FontAwesome name = "home" size={25}  style={{color :tintColor}}/>
            )
        }
    },
    Searchtab:{
        screen:SearchTab,
        navigationOptions:{
            tabBarIcon:({tintColor}) =>(
                <FontAwesome name = "search" size={25}  style={{color :tintColor}}/>
            )
        }
    },
    AddMediatab:{
        screen:AddMediaTab,
        navigationOptions:{
            tabBarIcon:({tintColor}) =>(
                <Icon name = "ios-add-circle" size={20}  style={{color :tintColor}}/>
            )
        }
    },
    Liketab:{
        screen:LikeTab,
        navigationOptions:{
            tabBarIcon:({tintColor}) =>(
                <FontAwesome name = "heart-o" size={25}  style={{color :tintColor}}/>
            )
        }
    },
    Profiletab:{
        screen:ProfileTab,
        navigationOptions:{
            tabBarIcon:({tintColor}) =>(
                <Icon name = "person" size={20}  style={{color :tintColor}}/>
            )
        }
    },
},
{
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition:'bottom',
    tabBarOptions:{
        style:{
            ...Platform.select({
                android:{
                    backgroundColor:'white'
                }
            })
        },
        activeTintColor:'#000',
        inactiveTintColor:'#d1cece',
        showLabel:false,
        showIcon:true
    }
}
)
const App = createAppContainer(AppTabNavigator);

export default App;