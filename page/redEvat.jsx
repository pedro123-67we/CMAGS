import { 
    View, 
    Text, 
    TextInput,
    TouchableHighlight,
    StyleSheet,
    Alert 
} from 'react-native'
import React from 'react'

const RedEvat = () => {
  return (
    <View style={styles.container}>
        <TextInput placeholder='Nombre del paciente'/>
        <TextInput placeholder='Edad'/>
        <TextInput placeholder='Tipo de cancer'/>
        <TextInput placeholder='Paliativo'/>
        <TextInput placeholder='Servicio/Unidad'/>
        <TextInput placeholder='Mes'/>
        <TextInput placeholder='Fecha Primer EVAT rojo'/>
        <TextInput placeholder='Hora Primer EVAT rojo'/>
        <TextInput placeholder='CN'/>
        <TextInput placeholder='CV'/>
        <TextInput placeholder='R'/>
        <TextInput placeholder='PE'/>
        <TextInput placeholder='Total EVAT'/>
        <TextInput placeholder='Consulta a UCI'/>
        <TextInput placeholder='Hora de consulta'/>
        <TextInput placeholder='Intervencion?(UCI o Pedi)'/>
        <TextInput placeholder='Hora de intervencion'/>
        <TextInput placeholder='Tipo de intervencion'/>
        <TextInput placeholder='Duracion de EVAT rojo(Horas)'/>
        <TextInput placeholder='Evento de deterioro'/>
        <TextInput placeholder='Tipo de Evento'/>
        <TextInput placeholder='Fecha de Evento'/>
        <TextInput placeholder='Hora de Evento'/>
        <TextInput placeholder='Traslado a UCI/UTI'/>
        <TextInput placeholder='Fecha de traslado'/>
        <TextInput placeholder='Hora de Traslado'/>
        <TextInput placeholder='Nombre del paciente'/>
        <TextInput placeholder='Estancia UCI/UTI'/>
        <TextInput placeholder='Mortalidad de UCI o piso'/>
        <TextInput placeholder='Escriba un Comentario'/>
    </View>
  )
}
styles= StyleSheet.create({
  container:{
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation:2,
    alignItems:'center',
    justifyContent:'center',
    width:'85%',
    margin:'8%',
    borderRadius:4,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
    },
  }
})

export default RedEvat