import React from 'react'

import { View, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from '../screens/HomeScreen';
import logo from "../assests/images/logo.png";
import StoryScreen from '../screens/StoryScreen';

const HomeStack = createNativeStackNavigator();
const Homeroutes = () => {
return (
<HomeStack.Navigator>
    <HomeStack.Screen
        name="Rome"
        component={HomeScreen}
        options={{ 
        headerShown: true,
        title:' Instagram',
        headerTitle: () => (
            <Image source={logo} resizeMode="contain" style={{width: 130, height: 55}}/>
        ),
        headerRight : ()=>(
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Octicons name='diff-added'size={25} color={"#000"} style={{marginRight:20}}></Octicons>
        <MaterialCommunityIcons name='facebook-messenger' size={30} color={'#000'} style={{marginRight:20}}></MaterialCommunityIcons>
        </View>
        )
        }}
    />
    <HomeStack.Screen name="Story" component={StoryScreen} options={{ headerShown: false, title:"Instagram"}}/>

</HomeStack.Navigator>
)
}

export default Homeroutes;