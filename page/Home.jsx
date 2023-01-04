import { View, StyleSheet, Text } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>nombre:juan</Text>
      <Text>edad:13</Text>

    </View>
  );
};

const styles= StyleSheet.create({
  cardContainer:{
    justifyContent: "center", 
    alignItems: "center"
  }
})

export default Home;
