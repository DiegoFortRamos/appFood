import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Topo from "./src/componentes/topo/Topo";
import Login from "./src/telas/Login";

export  default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <Login/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    flex: 1,
    marginTop: 60
  }
  
})