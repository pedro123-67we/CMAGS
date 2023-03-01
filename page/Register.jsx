import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

const Register = () => {
	const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter Your Full Name"></TextInput>
        <TextInput style={styles.input} placeholder="Enter Your Email"></TextInput>
        <TextInput style={styles.input} placeholder="Enter Your Cellphone Number"></TextInput>
        <TextInput style={styles.input} placeholder="Enter Your Password"></TextInput>
		<Checkbox style={styles.checkbox}  value={isChecked} onValueChange={setChecked} /><Text>Acepta terminos y condiciones</Text>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text>SingUp</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
		borderWidth: 1,
		padding: '5%',
		alignItems: 'center',
		justifyContent: 'center',
		width: '85%',
		margin: '8%',
		backgroundColor: 'white',
		borderRadius: 8,
		elevation: 8,
	},
    textIn:{
        width: '80%',
		height: 60,
		borderWidth: 1,
		margin: '1%',
		borderRadius: 8,
		marginTop: '5%',
		justifyContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '3%',
    },
	input: {
		borderColor: 'gray',
		width: '80%',
		borderWidth: 2,
		padding: 15,
		margin: 10,
		borderRadius: 8,
	},
	buttonContainer: {
		backgroundColor: 'green',
		marginBottom: '5%',
		marginTop: '10%',
		paddingHorizontal: 50,
		paddingVertical: 10,
		alignItems: 'center',
		borderRadius: 8,
		width: '80%',
	},
})