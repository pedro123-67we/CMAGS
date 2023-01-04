import { View} from 'react-native'
import React from 'react'
import Boton from '../components/Boton'

const PatientRegisterPage = ({ navigation }) => {
    
    return (
        <View>
            <Boton 
            text = "Regresar a login"
            onPress={()=>{
                navigation.navigate('Login')
            }}
            />
            <Boton 
            text = "Ir a nurse form"
            onPress={()=>{
                navigation.navigate('Registro de Personal')
            }}
            />
        </View>

    )
}


export default PatientRegisterPage