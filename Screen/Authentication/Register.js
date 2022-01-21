import React, {useState} from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {View, TextInput, StyleSheet,Text, TouchableOpacity, Alert} from 'react-native'
import Btn from "../../Component/Btn";
import ByFacebook from "../../Component/ByFacebook";
import ByGoogle from "../../Component/ByGoogle";
import LogIn from "./LogIn"
// import { auth } from "../../Component/FirebaseConfig";
import axios from 'axios'
import { url_base } from "../../api/connect";
import qs from 'qs'
export default function Register({navigation}){
    const [values, setValues] = useState({
        email: '',
        fullname: '',
        password: '',
        confirmPassword: ''
    })

    const handleFullNameChange = (e) =>{
        setValues({...values, fullname: e})
    }
    const handleEmailChange = (e) =>{
        setValues({...values, email: e})

    }

    const handlePasswordChange = (e) =>{
        setValues({...values, password: e})
    }

    const handleConfirmPasswordChange = (e) =>{
        setValues({...values, confirmPassword: e})
    }

    // const handleChange = (e) => {
    //     const target = e.target;
    //     const name = target.name
    //     const value = e.value
    //     console.log(e.target.value);
    //     // setValues({...values, [name] : value})
    // }

    const SignUpAcc = async (email, password) => {
        try {
            const data = {
                'email': email,
                'password': password,
                'source': null
            }
            console.log("==============================",email,password);
            const res = await axios.post(`${url_base}auth/login`, qs.stringify(data));

            // showMessage({ type: 'success', message: 'Register successful', description: 'Check your mail to confirm your account' })
            navigation.navigate('LogIn')
        } catch (error) {
          
            console.log("error:",error);
        }
        
    }
    const [submitted, setSubmitted] = useState(false)
    const [checkedPassword, setCheckedPassword] = useState(false)
    const handleSubmit = (e) =>{
        // e.preventDefault();
        if(values.password === values.confirmPassword){
            setCheckedPassword(true)
        }
        setSubmitted(true);
        console.log('======', values.confirmPassword);
        SignUpAcc(values.email,values.password)
        
        
    }
    return(
        <View style={styles.container}>
             <View style={styles.form__input}>
                <Text>Full name</Text>
                <TextInput style={styles.input} placeholder="Nguyen Van A" keyboardType="default"
                value={values.fullname}
                name="fullname"
                onChangeText={handleFullNameChange}
                />
                {submitted && !values.fullname ?<Text style={styles.textWarning}>Full name can not be empty</Text>:null}
            </View> 
            <View style={styles.form__input}>
                <Text>Email</Text>
                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="email-address"
                value={values.email}
                name="email"
                onChangeText = {handleEmailChange}
                />
                {submitted && !values.email? <Text style={styles.textWarning}>Email can not be empty</Text>: null}
            </View>                
            <View style={styles.form__input}>
                <Text>Password</Text>
                <TextInput style={styles.input} placeholder="******" secureTextEntry={true}
                value={values.password}
                name="password"
                onChangeText={handlePasswordChange}
                />
                {submitted && !values.password ?<Text style={styles.textWarning}>Password can not be empty</Text>: null}
            </View>
            <View style={styles.form__input}>
                <Text>Confirm password</Text>
                <TextInput style={styles.input} placeholder="******" secureTextEntry={true}
                value={values.confirmPassword}
                name="confirmPassword"
                onChangeText={handleConfirmPasswordChange}
                />
                {submitted && !values.confirmPassword ?<Text style={styles.textWarning}>Confirm password can not be empty</Text>:null}
                {submitted && !checkedPassword ?<Text style={styles.textWarning}>Confirm password must be the same as Password</Text>:null}
            </View>
            <View style={styles.btn} >
                <TouchableOpacity style={styles.button}
                 onPress={handleSubmit}>
                    <Text style={styles.title}>Register</Text>
                </TouchableOpacity>
                {/* <Btn title={'Register'}/> */}
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
                     navigation.navigate('LogIn')
                    // navigation.navigate('LogIn')
                    // Alert.alert('Log In')
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
    button:{
        // width: "100%",
        height: 48,
        borderRadius: 100,
        backgroundColor: "#0071F0",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20
    },
    title:{
        fontSize: 18,
        color: '#fff'
    },
    textWarning:{
        color: 'red',
        marginBottom: 24,
        marginTop: -8
    },
})