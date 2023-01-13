import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { func } from "prop-types";
import React from "react";

const propTypes = {
	onPress: func,
};

const Button = props => {
	const { onPress } = props;

	return (
		<TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
			<Text style={styles.ButtonText}>Ingresa</Text>
		</TouchableOpacity>
	);
};

Button.propTypes = propTypes;
export default Button;

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: "green",
		marginBottom: "25%",
		marginTop: "5%",

		paddingHorizontal: 50,
		paddingVertical: 10,
		alignItems: "center",
		borderRadius: 8,
		width: "80%",
	},
	ButtonText: {
		color: "#ffffff",
		borderRadius: 10,
	},
});
