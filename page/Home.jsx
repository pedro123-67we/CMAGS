import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>nombre: Juan</Text>
      <Text>edad: 13</Text>
      <Text>Estado: Verde</Text>
      <TouchableHighlight><Text>Formulario Diario</Text></TouchableHighlight>
    </View>
  );
};

const styles= StyleSheet.create({
  cardContainer:{
    justifyContent: "center", 
    alignItems: "center"
  },
  buttonForm:{
    backgroundColor:'green',
    width:'50%',
    alignItems:'center',
    
  }
})

export default Home;
