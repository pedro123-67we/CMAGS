import { View, Text } from 'react-native'
import React from 'react'
import Boton from '../components/Button'

const PatientRegisterPage = ({ navigation }) => {
    return (
        <View>
            <Boton 
            text = "Regresar a login"
            onPress={()=>{
                navigation.navigate('Login')
            }}
            />
        </View>
    )
}

export default PatientRegisterPage