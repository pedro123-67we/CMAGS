import { View } from "react-native";
import React from "react";
import Button from "../components/Button";

// eslint-disable-next-line react/prop-types
const PatientRegisterPage = ({navigation}) => {
	const { control, handleSubmit, setValue } = useForm();

	const cleanForm = () => {
		setValue("name", "");
		setValue("typeOfCancer", "");
		setValue("services", "");
		setValue("palliative", "");
		setValue("age", "");
	};

	const { patientRequest } = useFetch();

	const onSubmit = async data => {
		try {
			Alert.alert("Agregar Paciente?", "", [
				{
					text: "Si",
					onPress: async () => {
						await patientRequest(data);
						Alert.alert("Agregado Correctamente");
					},
					style: "Agregado",
				},
				{
					text: "No",
					onPress: () => Alert.alert("No agregar"),
					style: "No Agregado",
				},
			]);
		} catch (err) {
			console.log(err);
		}
		cleanForm();
	};
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
							placeholder="Ingrese su nombre completo"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="name"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="Tipo de cancer"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="typeOfCancer"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="Servicios"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="services"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="Paliativo"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name="palliative"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder="Edad"
							keyboardType="numeric"
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							maxLength={2}
							value={value}
						/>
					)}
					name="age"
				/>
				<Button
					onPress={handleSubmit(onSubmit)}
					style={styles.button}
					color={"green"}
					title="Añadir"
				/>
				<Button
					onPress={()=>{
						// eslint-disable-next-line react/prop-types
						navigation.navigate("DailyForm");
					}}
					title="Añadir"
					
				/>
			</SafeAreaView>
		</KeyboardAwareScrollView>
	);
};

export default PatientRegisterPage;
