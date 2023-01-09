import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react';
//Screens
import LoginPage from '../page/LoginPage';
import NursePage from '../page/NursePage';
import PatientRegisterPage from '../page/PatientRegisterPage';
import Home from '../page/Home'
import Settings from '../page/Settings';
import RedEvat from '../page/RedEvat'


const LogoutStack = createNativeStackNavigator(); 

function Logout(){
    return (
        <LogoutStack.Navigator>
            <LogoutStack.Screen 
            name="Login" 
            component={LoginPage} />
        </LogoutStack.Navigator>
    )}

const Tab = createBottomTabNavigator();
    function MyTabs(){
        return(
            <Tab.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    tabBarActiveTintColor:'white',
                    tabBarActiveBackgroundColor:'black',
                    tabBarHideOnKeyboard:true
                }}
                >
                <Tab.Screen 
                    name="Login" 
                    component={Logout}
                    options={{
                        tabBarLabel:'Logout',
                        tabBarIcon:({color,size})=>(
                            <MaterialCommunityIcons name="home-circle-outline" size={30} color={color} />
                        )
                    }} 
                    />
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        tabBarLabel:'Home',
                        tabBarIcon:({color,size})=>(
                            <MaterialCommunityIcons name="home-circle-outline" size={30} color={color} />
                        )
                    }} 
                    />
                <Tab.Screen 
                    name="Registro Empleados" 
                    component={NursePage} 
                    options={{
                        tabBarLabel:'Registro Empleados',
                        tabBarIcon:({color,size})=>(
                            <MaterialCommunityIcons name="form-select" size={30}color={color} />
                        )
                    }}
                    />
                <Tab.Screen 
                    name="Settings" 
                    component={Settings} 
                    options={{
                        tabBarLabel:'Ajustes',
                        tabBarIcon:({color,size})=>(
                            <MaterialCommunityIcons name="account-cog" size={30} color={color} />
                        )
                    }}
                    />
                    <Tab.Screen 
                    name="Red Evat" 
                    component={RedEvat}
                    options={{
                        tabBarLabel:'Red Evat',
                        tabBarIcon:({color,size})=>(
                            <MaterialCommunityIcons name="home" size={30} color={color} />
                        )
                    }} 
                    />
            </Tab.Navigator>
        );
    }
export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
