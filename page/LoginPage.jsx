import { View } from "react-native";
import React from "react";
import Button from "../components/Button";

const LoginPage = ({ navigation }) => {
  return (
    <View>
      <Button
        text="Ir a registro"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />

      <Button
        text="Ir a Registro Personal"
        onPress={() => {
          navigation.navigate("Registro de Personal");
        }}
      />
    </View>
  );
};

export default LoginPage;
