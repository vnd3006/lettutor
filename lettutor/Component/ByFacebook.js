import React from "react";
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity,Alert} from 'react-native'
import facebook from '../assets/facebook.png'


export default function ByFacebook(props){
    return(
        <View style={styles.LogInbyfb}>
        <TouchableOpacity onPress={()=>{
            Alert.alert(`${props.title}`)
        }}>
            <Image style={styles.iconLogIn} source={facebook}/>
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