import { View } from 'react-native'
import React from 'react'
import Boton from '../components/Boton'

const LoginPage = ({navigation}) => {
    return (
        <View>
            <Boton 
            text ="Ir a registro"
            onPress={()=>{
                navigation.navigate('Home')
            }}
            />

<Boton 
            text ="Ir a Registro Personal"
            onPress={()=>{
                navigation.navigate('Registro de Personal')
            }}
            />
        </View>
    )
}

export default LoginPage