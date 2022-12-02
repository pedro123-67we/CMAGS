import { View, Text, Button } from 'react-native'
import React from 'react'
import Boton from '../components/Boton'

const LoginPage = ({navigation}) => {
    return (
        <View>
            <Boton 
            text ="Ir a registro"
            onPress={()=>{
                navigation.navigate('PatientRegister')
            }}
            />
        </View>
    )
}

export default LoginPage