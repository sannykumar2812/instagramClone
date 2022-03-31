import React from 'react';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


import SearchScreen from '../screens/SearchScreen';
import ReelScreen from '../screens/ReelScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from './home.routes';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused,color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                    ? 'home' : 'home-outline'
                return <MaterialCommunityIcons name={iconName} size={size} color={color}></MaterialCommunityIcons>
                }
                if (route.name === 'Search') {
                    return <Feather name='search' size={size} color={color}></Feather>
                    }
                if (route.name === 'Reel') {
                    return <Octicons name='video' size={size} color={color}></Octicons>
                    }
                if (route.name === 'Activity') {
                    iconName = focused
                    ? 'heart' : 'hearto'
                    return <AntDesign name={iconName} size={size} color={color}></AntDesign>
                    }
                if (route.name === 'Profile') {
                    iconName = focused
                    ? 'person' : 'person-outline'
                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                    }
                },
                tabBarActiveTintColor: '#131414',
                tabBarInactiveTintColor: '#6e706f',
                tabBarShowLabel:false,
            })}
            >
                <Tab.Screen  name="Home" component={HomeStackScreen} options={{ headerShown: false}}/>
                <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Reel" component={ReelScreen} options={{ headerShown: false }}/>
                <Tab.Screen name="Activity" component={ActivityScreen} options={{ headerShown: false }}/>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
                


            </Tab.Navigator>
    )

}

export default BottomTabNavigator;