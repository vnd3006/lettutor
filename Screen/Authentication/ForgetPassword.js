import React from "react";
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity,Alert} from 'react-native';
import Btn from "../../Component/Btn";
import LogoLettutor from "../../Component/LogoLettutor";
// import { TextInput } from "react-native-web";




export default function ForgetPassword(){
    return(
        <View style={styles.container}>
            <LogoLettutor/>
            <View style={styles.containnerText}>
                <Text style={styles.text}>
                    Enter your email address and we'll send you a link to reset your password
                </Text>
            </View>
            <View>
                <View style={styles.form__input}>
                    <TextInput style={styles.input} placeholder="Enter your Email" keyboardType="email-address"/>
                </View>
            </View>
            <View>
                <Btn title={"Send"}></Btn>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {

        container:{
            marginTop:50
            // alignItems: "center"
        },
        input:{
            marginTop:4,
            marginBottom:12 ,
            height: 48,
            borderWidth: 0.5,
            borderRadius: 50,
            paddingLeft: 20,
            marginBottom: 50
        },
        form__input:{
            marginLeft: 20,
            marginRight: 20
        },
        containnerText:{
            marginTop: 50,
            marginBottom: 50,
            marginRight: 20,
            marginLeft: 20,
            alignItems: "center"
        },
        text:{
            textAlign: "center",
            opacity: 0.6
        }
    }
)