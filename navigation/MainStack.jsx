import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
//Screens
import Home from '../page/Home'
import Settings from '../page/Settings'
import RedEvat from '../page/RedEvat'

//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator()

const MyTabs = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ paddingBottom: 30 }}
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: 'black',
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home-circle-outline"
                            size={30}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Red Evat"
                component={RedEvat}
                options={{
                    tabBarLabel: 'Red Evat',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="clipboard-edit-outline"
                            size={30}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-cog"
                            size={30}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default MyTabs
