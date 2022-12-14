import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { string, func } from "prop-types";
import React from "react";

const propTypes = {
	onPress: func,
	text: string,
};

const Boton = props => {
	const { onPress, text } = props;

	return (
		<TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};

Boton.propTypes = propTypes;
export default Boton;

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: "green",
		marginBottom: 10,
		paddingHorizontal: 50,
		paddingVertical: 10,
		alignItems: "center",
	},
	buttonText: {
		color: "#f9f9f9",
	},
});
