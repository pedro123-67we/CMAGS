import { useState, useEffect, useRef } from 'react'
import { Text, View, Button, Platform, TextInput } from 'react-native'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import axios from 'axios'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
})


async function registerForPushNotificationsAsync() {
    let token
    if (Device.isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!')
            return
        }
        token = (await Notifications.getExpoPushTokenAsync()).data
        console.log(token)
    } else {
        alert('Must use physical device for Push Notifications')
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        })
    }

    return token
}

export default function App() {
    const [expoPushToken, setExpoPushToken] = useState('')
    const [notification, setNotification] = useState(false)
    const notificationListener = useRef()
    const responseListener = useRef()

    useEffect(() => {
        registerForPushNotificationsAsync().then(token =>
            setExpoPushToken(token),
        )

        notificationListener.current =
            Notifications.addNotificationReceivedListener(notification => {
                setNotification(notification)
            })

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener(response => {
                console.log(response)
            })

        return () => {
            Notifications.removeNotificationSubscription(
                notificationListener.current,
            )
            Notifications.removeNotificationSubscription(
                responseListener.current,
            )
        }
    }, [])

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <Text>Your expo push token: {expoPushToken}</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Title: {notification && notification.request.content.title}{' '}
                </Text>
                <Text>
                    Body: {notification && notification.request.content.body}
                </Text>

                <TextInput placeholder="Ingresa titulo de notificación:"/>
                <TextInput placeholder="Ingresa una breve descripción:" />
            </View>
            <Button
                title="Send Notification"
                onPress={async () => {
                    try {
                        await axios.post(process.env.API_BASE_URL + '/api/v1/notification/', {
                            title: "hola",
                            description: 'hola',
                            idPatient: '63a145eaa153becce4032053',
                            idTransmitter: '63b1f362e650d1d3e3dfe5ae',
                            idDoctor: '63b59a69775e132b0acec6e6'
                        }) 
                    } catch (error) {
                        console.log(error.response.data.msg)
                    }

                }}
            />
        </View>
    )
}
