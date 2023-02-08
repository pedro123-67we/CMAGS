import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.cardContainer}>
            <MaterialCommunityIcons
                name="account-heart"
                size={50}
                color='green'
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
        borderWidth: 1,
        width: '70%',
        height: '30%',
        borderRadius: 4,
        marginTop: '30%',
        marginLeft: '15%',
        padding:1
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