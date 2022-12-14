import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStack from "./navigation/MainStack";
import { StyleSheet } from "react-native";

export default function App() {
	return (
		<SafeAreaView style={style.safeArea}>
			<MainStack />
		</SafeAreaView>
	);
}

const style = StyleSheet.create({
	safeArea: { flex: 1 },
});
