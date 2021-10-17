import React from "react";
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity,Alert} from 'react-native'
import Btn from "../../Component/Btn";
import ByFacebook from "../../Component/ByFacebook";
import ByGoogle from "../../Component/ByGoogle";
import LogoLettutor from "../../Component/LogoLettutor";
// import { TextInput } from "react-native-web";




export default function LogIn(){
    return(
        <View style={styles.container}>
            <LogoLettutor/>
            <View>
                <View style={styles.form__input}>
                    <Text>Email</Text>
                    <TextInput style={styles.input} placeholder="example@email.com" keyboardType="email-address"/>
                </View>
                <View style={styles.form__input}>
                    <Text>Password</Text>
                    <TextInput style={styles.input} placeholder="******" secureTextEntry={true}/>
                </View>
            </View>
            <View style={styles.forgotPass}>
                <TouchableOpacity onPress={()=>{
                    Alert.alert('Forgot Password')
                }}>
                    <Text style={styles.textForgot}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Btn title={"Log In"}></Btn>
            </View>
            <View style={styles.textLog}>
                <Text >Or continue with</Text>
            </View>
            <View style={styles.LogInByAPI}>
                <ByFacebook title={'Log in by facbook'}/>
                <ByGoogle title={'Log in by google'}/>
            </View>
            <View style={styles.createAccount}>
                <Text>Don't have account?</Text>
                <TouchableOpacity onPress={()=>{
                    Alert.alert('Sign Up')
                }}>
                    <Text style={styles.SignUp}>Sign up</Text>
                </TouchableOpacity>
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
            paddingLeft: 20
        },
        form__input:{
            marginLeft: 20,
            marginRight: 20
        },
        forgotPass:{
            alignItems: 'flex-end',
            marginRight: 20,
            marginTop: 24,
            marginBottom: 16,
        },
        textForgot:{
            color:'#286AD5'
        },
        textLog:{
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20
        },
        createAccount:{
            flexDirection: "row",
            justifyContent: "center"
        },
        SignUp:{
            color: '#286AD5',
            paddingLeft: 4
        },
        LogInByAPI:{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20
        }
    }
)