import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import useFetch from '../hooks/useFetch'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const RedEvat = () => {
    const { control, handleSubmit, setValue } = useForm()

    const cleanForm = () => {
        setValue('namePatient', '')
        setValue('age', '')
        setValue('typeofcancer', '')
        setValue('paliative', '')
        setValue('service', '')
        setValue('month', '')
        setValue('datefirstevat', '')
        setValue('timefirstevat', '')
        setValue('cn', '')
        setValue('cv', '')
        setValue('r', '')
        setValue('pe', '')
        setValue('total', '')
        setValue('consultUci', '')
        setValue('timeConsult', '')
        setValue('intervencion', '')
        setValue('timeIntervencion', '')
        setValue('typeIntervencion', '')
        setValue('duracionEvat', '')
        setValue('event', '')
        setValue('typeEvent', '')
        setValue('dateEvent', '')
        setValue('timeEvent', '')
        setValue('traslado', '')
        setValue('timetraslado', '')
        setValue('timetraslado', '')
        setValue('estancia', '')
        setValue('floor', '')
        setValue('comment', '')
    }

    const { redEvatpost } = useFetch()

    const onSubmit = async data => {
        console.log(data, selectedValue)
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputRed}
                    placeholder="Nombre del paciente"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Fecha de Nacimiento"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Dx oncológico"
                />
                <TextInput style={styles.inputRed} placeholder="Paliativo" />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Servicio/Unidad"
                />
                <TextInput style={styles.inputRed} placeholder="Mes" />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Fecha Primer EVAT rojo"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Hora Primer EVAT rojo"
                />
                <TextInput style={styles.inputRed} placeholder="CN" />
                <TextInput style={styles.inputRed} placeholder="CV" />
                <TextInput style={styles.inputRed} placeholder="R" />
                <TextInput style={styles.inputRed} placeholder="PE" />
                <TextInput style={styles.inputRed} placeholder="Total EVAT" />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Consulta a UCI"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Hora de consulta"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Intervención?(UCI o Pedi)"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Hora de intervención"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Tipo de intervención"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Duración de EVAT rojo(Horas)"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Evento de deterioro"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Tipo de Evento"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Fecha de Evento"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Hora de Evento"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Traslado a UCI/UTI"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Fecha de traslado"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Hora de Traslado"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Estancia UCI/UTI"
                />
                <TextInput
                    style={styles.inputRed}
                    placeholder="Mortalidad de UCI o piso"
                />
                <TextInput
                    style={styles.inputComment}
                    placeholder="Escriba un Comentario"
                />
                <TouchableOpacity style={styles.btnSave}>
                    <Text style={styles.textBtn}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowOpacity: 0.3,
        shadowRadius: 4,
        padding: '4%',
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        margin: '8%',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    inputRed: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        margin: '1%',
        borderRadius: 4,
        textAlign: 'center',
        padding: 5,
        margin: '4%',
    },
    inputComment: {
        width: '80%',
        height: 130,
        borderWidth: 1,
        borderRadius: 4,
        margin: '4%',
        textAlign: 'center',
    },
    btnSave: {
        backgroundColor: '#ADE792',
        width: '80%',
        height: 45,
        borderRadius: 4,
        margin: '4%',
    },
    textBtn: {
        color: '#FFFFFF',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
})

export default RedEvat
