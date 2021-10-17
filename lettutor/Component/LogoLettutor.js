import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native'
import Logo from '../assets/logo.png'

export default function LogoLettutor(){
    return(
        <View style={styles.logo}>
            <Image style={styles.icon} source={Logo}/>
            <Text style={styles.title}>LET TUTOR</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        alignItems: "center",
        marginBottom: 40
    },
    icon:{
        width: 120,
        height: 120
    },
    title:
    {
        fontSize: 30,
        fontWeight: "700",
        color: "#0071F0"
    },
})