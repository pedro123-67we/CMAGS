import {
    StyleSheet,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Alert,
    View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import useFetch from '../hooks/useFetch'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native'

// eslint-disable-next-line react/prop-types
const DailyForm = () => {
    const navigation = useNavigation()
    const { control, handleSubmit, setValue } = useForm()
    const [selectedValue, setSelectedValue] = useState('temperature')

    const cleanForm = () => {
        setValue('hour', '')
        setValue('temperature', '')
        setValue('bloodPressure', '')
        setValue('FC', '')
        setValue('FR', '')
        setValue('SO2', '')
        setValue('ltsO2', '')
        setValue('pain', '')
        setValue('capillaryRefill', '')
        setValue('rightPupil', '')
        setValue('leftPupil', '')
        setValue('neuro', '')
        setValue('cardio', '')
        setValue('resp', '')
        setValue('nurseConcern', '')
        setValue('familyConcern', '')
    }

    const { postEvatForm } = useFetch()

    const onSubmit = async data => {
        console.log(data, selectedValue)
        try {
            Alert.alert('Formulario llenado', '', [
                {
                    text: 'Ok',
                    onPress: async () => {
                        await postEvatForm({
                            ...data,
                            temperature: selectedValue,
                            idPatient: '638a2906ab6e8d284d203e22',
                        })
                    },
                },
            ])
            navigation.navigate('Home')
        } catch (err) {
            console.log(err)
        }
        cleanForm();
    }
    return (
        <KeyboardAwareScrollView>
            <SafeAreaView style={styles.container}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Hora de revision"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="hour"
                />
                <View style={styles.picar}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={itemValue => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="35-35.5" value="35" />
                        <Picker.Item label="36-36.5" value="36" />
                        <Picker.Item label="37-37.5" value="37" />
                        <Picker.Item label="38-38.5" value="38" />
                        <Picker.Item label="39-39.5" value="39" />
                    </Picker>
                </View>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Presion arterial mmHg"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="bloodPressure"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Frecuencia cardiaca"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="FC"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Frecuencia respiratoria"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="FR"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="SO2"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="SO2"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="LtsO2"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="ltsO2"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Dolor"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="pain"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Llenado capilar"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="capillaryRefill"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Pupila derecha"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="rightPupil"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Pupila izquierda"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="leftPupil"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Neuro"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="neuro"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Cardio"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="cardio"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Respiratorio"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="resp"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Preocupacion enfermera"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="nurseConcern"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Preocupacion familia"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="familyConcern"
                />
                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    style={styles.button}
                >
                    <Text style={styles.textbtn}>Guardar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Notifications')}
                    style={styles.buttonNotification}
                >
                    <Text style={styles.textbtn}>Notificar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        margin: 20,
    },
    picar: {
        borderColor: 'gray',
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 3,
        margin: 20,
    },

    container: {
        marginTop: '10%',
        marginVertical: '10%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        margin: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 15,
    },
    button: {
        width: '40%',
        height: 30,
        backgroundColor: '#ADE792',
        alignItems: 'center',
        margin: 10,
        borderRadius: 4,
        justifyContent: 'center',
    },
    textbtn: {
        color: '#FFFFFF',
    },
    buttonNotification: {
        width: '40%',
        height: 30,
        backgroundColor: '#FFFBAC',
        alignItems: 'center',
        margin: 10,
        borderRadius: 4,
        justifyContent: 'center',
    },
})

export default DailyForm
