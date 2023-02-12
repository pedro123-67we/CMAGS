import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useFetchDataById from '../hooks/useFetchDataById';
import useFetch from '../hooks/useFetch';

const PatientInformation = () => {
	const { getPatientsFilter } = useFetch();
	const { data } = useFetchDataById(getPatientsFilter);
	return data.map(patient => (
		<KeyboardAwareScrollView>
			<View>
				<Text style={styles.labelTittle}>Informacion del Paciente:</Text>
				<View style={styles.lineStyle} />
				<Text style={styles.labelSubTittle}>Nombre:</Text>
				<Text style={styles.patientInfo}>{patient.name}</Text>
				<View style={styles.lineStyle} />
				<Text style={styles.labelSubTittle}>Edad:</Text>
				<Text style={styles.patientInfo}>13</Text>
				<View style={styles.lineStyle} />
				<Text style={styles.labelSubTittle}>Dx Oncologicó:</Text>
				<Text style={styles.patientInfo}>si</Text>
				<View style={styles.lineStyle} />
				<Text style={styles.labelSubTittle}>Paliativo:</Text>
				<Text style={styles.patientInfo}>si</Text>
				<View style={styles.lineStyle} />
				<Text style={styles.labelSubTittle}>Enfermera:</Text>
				<Text style={styles.patientInfo}>Erika Valverde</Text>
				<View style={styles.lineStyle} />
			</View>
		</KeyboardAwareScrollView>
	));
};

const styles = StyleSheet.create({
	labelTittle: {
		fontSize: 20,
		fontWeight: 'bold',
		padding: '4%',
		color: '#54B435',
	},

	lineStyle: {
		borderWidth: 0.4,
		borderColor: '#B2B2B2',
		margin: 7,
	},
	labelSubTittle: {
		fontSize: 17,
		fontWeight: 'bold',
		padding: '3%',
		color: '#C21010',
	},
	patientInfo: {
		fontSize: 15,
		padding: '4%',
	},
});

export default PatientInformation;
