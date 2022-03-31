import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from './BottomTabNavigator';

const RootStack = createStackNavigator();


const Router = () => {
return (

    <RootStack.Navigator>
            <RootStack.Screen 
            name="Home"
            component={BottomTabNavigator}
            options={{
                headerShown: true
            }}

        />
        {/* <RootStack.Screen 
        name={"StoryScreen"}
        component={StoryScreen} options={{ headerShown: false}} /> */}
    </RootStack.Navigator>


)
}
console.loh("HI")

export default Router