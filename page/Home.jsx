import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import  useFetchDataById  from '../hooks/useFetchDataById'
import useFetch from '../hooks/useFetch'

const Home = () => {
    const { getAllPatientsNurse } = useFetch();
    const { data } = useFetchDataById(getAllPatientsNurse,"63b1f362e650d1d3e3dfe5ae")
    const navigation = useNavigation()
    console.log(data)
    return (
            <View style={styles.cardContainer}>
            <MaterialCommunityIcons
                name="account-heart"
                size={50}
                color='green'
                onPress={() => navigation.navigate("PatientInformation") }
            />
            <Text style={styles.infText}>Name: Juan</Text>
            <Text style={styles.infText}>Age: 13</Text>
            <Text style={styles.infText}>Status: Verde</Text>
            <TouchableHighlight
                style={styles.buttonForm}
                onPress={() => navigation.navigate('DailyForm')}
            >
                <Text style={styles.textStyle}>Daily form</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '70%',
        height: '30%',
        borderRadius: 4,
        marginTop: '30%',
        marginLeft: '15%',
        padding:1,
        elevation: 8,
        backgroundColor: 'white'
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