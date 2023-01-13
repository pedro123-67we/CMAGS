import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginPage from "../page/LoginPage";
import PatientRegisterPage from "../page/PatientRegisterPage";
import DailyForm from "../page/DailyForm";

const Stack = createNativeStackNavigator();
const MainStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={LoginPage} />
				<Stack.Screen
					name="PatientRegister"
					component={PatientRegisterPage}
				/>
				<Stack.Screen
					name="DailyForm"
					component={DailyForm}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
