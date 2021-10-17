import React from "react";
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity,Alert} from 'react-native'
import google from '../assets/google.png'


export default function ByGoogle(props){
    return(
        <View style={styles.LogInbyfb}>
        <TouchableOpacity onPress={()=>{
            Alert.alert(`${props.title}`)
        }}>
            <Image style={styles.iconLogIn} source={google}/>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    iconLogIn:{
        width: 40,
        height:40,
        marginLeft:10,
        marginRight:10
    }
})