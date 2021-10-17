import React from "react";
import {View, Button, StyleSheet, Alert, Text, TouchableHighlight} from 'react-native'



export default function Btn(props){
    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={()=>{Alert.alert(`${props.title}`)}}>
                <Text style={styles.title}>{props.title}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       marginRight: 20,
       marginLeft: 20
    },
    
    button:{
        width: "100%",
        height: 48,
        borderRadius: 100,
        backgroundColor: "#0071F0",
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        fontSize: 18,
        color: '#fff'
    }
})