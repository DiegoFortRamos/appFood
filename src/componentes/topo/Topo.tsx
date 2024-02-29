import logo from '../../assets/logo.png'
import React from "react";
import styles from './style';
import { Image, SafeAreaView, Text } from "react-native";


export default function Topo(){
    return(
       <SafeAreaView style={styles.container}>
        <Image source={logo} alt="foto de um hamburguer"/>
        <Text style={styles.title}>
            Os melhores lanches estão aqui!
        </Text>
       </SafeAreaView>
        
    )
}
