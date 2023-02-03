import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
    return (
        <KeyboardAwareScrollView>
        <View style={styles.cardContainer}>
            <MaterialCommunityIcons
                name="account-heart"
                size={50}
                color='green'
                onPress={() => navigation.navigate("PatientInformation") }
            />
            <Text style={styles.infText}>nombre: Juan</Text>
            <Text style={styles.infText}>edad: 13</Text>
            <Text style={styles.infText}>Estado: Verde</Text>
            <TouchableHighlight
                style={styles.buttonForm}
                onPress={() => navigation.navigate('DailyForm')}
            >
                <Text style={styles.textStyle}>Formulario Diario</Text>
            </TouchableHighlight>
        </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        elevation: 5,
        width: '70%',
        height: '30%',
        borderRadius: 4,
        marginTop: '10%',
        marginLeft: '15%',
        padding:1,
    },
    buttonForm: {
        backgroundColor: 'green',
        width: '50%',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 4,
        margin: '6%',
        padding:10
    },
    textStyle: {
        color: 'white',
        fontSize:15
    },
    infText: {
        fontSize:15,
        marginTop:'1%'
    },
})

export default Home
