import React from "react";
import {View, TextInput, StyleSheet,Text, TouchableOpacity, Alert} from 'react-native'
import Btn from "../../Component/Btn";
import ByFacebook from "../../Component/ByFacebook";
import ByGoogle from "../../Component/ByGoogle";


export default function Register(){
    return(
        <View style={styles.container}>
             <View style={styles.form__input}>
                <Text>Full name</Text>
                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="default"/>
            </View> 
            <View style={styles.form__input}>
                <Text>Email</Text>
                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="email-address"/>
            </View>                
            <View style={styles.form__input}>
                <Text>Password</Text>
                <TextInput style={styles.input} placeholder="******" secureTextEntry={true}/>
            </View>
            <View style={styles.form__input}>
                <Text>Confirm password</Text>
                <TextInput style={styles.input} placeholder="******" secureTextEntry={true}/>
            </View>
            <View style={styles.btn} >
                <Btn title={'Register'}/>
            </View>
            <View style={styles.textLog}>
                <Text >Or continue with</Text>
            </View>
            <View style={styles.LogInByAPI}>
                <ByFacebook title={'register by facbook'}/>
                <ByGoogle title={'register by google'}/>
            </View>
            <View style={styles.createAccount}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={()=>{
                    Alert.alert('Log In')
                }}>
                    <Text style={styles.LogIn}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 50
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
    btn:{
        marginTop: 24,
        marginBottom: 24
    },
    textLog:{
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
    },
    LogInByAPI:{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20
    },
    createAccount:{
        flexDirection: "row",
        justifyContent: "center"
    },
    LogIn:{
        color: '#286AD5',
        paddingLeft: 4
    },
})