import { View, Image, Button, SafeAreaView, StyleSheet, ScrollView, TextInput, Alert } from 'react-native'
import React from 'react'
import Boton from '../components/Boton'
import useFetch from '../hooks/useFetch'
import { useForm, Controller} from 'react-hook-form'
import {Route} from "react-router-native";



const LoginPage = ({navigation}) => {
  const { control, handleSubmit, formState: { errors } } = useForm(
    
  );
    const {loginRequest} = useFetch()
    const onSubmit = async (data) => {
     console.log(data);
      try {
        //showLoader();
        await loginRequest(data);
        
      } catch (err) {
       console.log(err);
      }}
    return (
        <ScrollView style={styles.scroll}>
            <SafeAreaView style={styles.container}>
           
                <Image style={styles.image} source={require('../assets/1.jpg')} />
                <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      <Boton title="Submit" onPress= { handleSubmit(onSubmit)} />
                {/* <TextInput style={styles.input} placeholder="Ingrese su usuario" />
                <TextInput style={styles.input} type='password' placeholder="Ingrese su contraseña" /> */}
                {/* <Button style={styles.button} title="Ingresar" onPress={(PatientRegister) => console.log('Registro exitoso')} /> */}
                {/* <Boton 
            text ="Ingresar"
            onPress={()=>{
                navigation.navigate('PatientRegister')
            }}
            /> */}
          
              </SafeAreaView>
              </ScrollView>
            
  );
}
const styles = StyleSheet.create({
    input: {
      borderColor: "gray",
      width: "80%",
      borderWidth: 1,
      // borderRadius: 10,
      padding: 15,
      margin:10,
      // height: 40,
      // width: '90%',
      // borderRadius:'10%',
      // marginTop:'60%',
      // margin: 12,
      // fontcolor:'white',
      // borderWidth: 2,
      // padding: 10,
      // backgroundcolor: 'white'
    },
  
    image:{
      width:"50%",
      height:"35%",
      borderRadius:'10%',
      marginTop:'10%',
      marginBottom:'5%'
    },
    scroll: {
        flex: 1,
        
      },
  
    container:{
      // flex:1,
      // justifyContent:'center',
      // marginHorizontal:40,
      // alignItems: 'center',
      // backgroundColor:'#d3d3d3',
      // marginBottom:'60%',
      // marginTop: '40%',
      // borderRadius: '10%'
      marginTop:"35%",
      marginVertical:"10%",
      borderWidth:1,borderColor:"black",
      backgroundColor:"#d3d3d3",
      borderRadius: '10%',
      margin:25,
      alignItems:"center",
      shadowColor:"#000",
      shadowOffset:{
        width:0,
        height:6
      },
      shadowOpacity:0.30,
      shadowRadius:4.65,
      elevation:8
    },
    button:{
      backgroundColor:"green",
      // border:3,
      //   borderColor: 'green',
      //   color:'yellow',
      //   borderRadius:'10%',
      //   fontcolor:'blue',
      
    }

  });

export default LoginPage