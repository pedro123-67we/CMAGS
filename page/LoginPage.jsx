import { View } from "react-native";
import React from "react";
import { func } from "prop-types";
import Boton from "../components/Boton";

const propTypes = {
	navigation: func,
};

const LoginPage = ({ navigation }) => {
	return (
		<View>
			<Boton
				text="Ir a registro"
				onPress={() => {
					navigation.navigate("PatientRegister");
				}}
			/>
		</View>
	);
};

LoginPage.propTypes = propTypes;
export default LoginPage;
