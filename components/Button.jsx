import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = (props) => {
  const { onPress, text } = props;

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.ButtonText}>Ingresa</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "green",
    marginBottom: "25%",
    marginTop: "5%",

    paddingHorizontal: 50,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: "8%",
    width: "80%",
  },
  ButtonText: {
    color: "#ffffff",
    borderRadius: "10%",
  },
});
