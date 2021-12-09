import React, {useState, useEffect} from "react";
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity,Alert, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Btn from "../../Component/Btn";
import ByFacebook from "../../Component/ByFacebook";
import ByGoogle from "../../Component/ByGoogle";
import LogoLettutor from "../../Component/LogoLettutor";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import { TextInput } from "react-native-web";
import { auth } from "../../Component/FirebaseConfig";




export default function LogIn({navigation}){
    const [values,setValues] = useState({
        email: '',
        password: ''
    })
    const handleEmailChange = (e) => {
        setValues({...values, email: e})
    }
    
    const handlePasswordChange = (e) => {
        setValues({...values, password: e})
    }

    // const naviga = useNavigation();

    // useEffect(() => {
    //    const unsubscribe =  auth.onAuthStateChanged(user =>{
    //        if(user){
    //            navigation.replace('TeacherBooking');
    //        }
    //    })
    //    return unsubscribe
    // })

    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) =>{
        // e.preventDefault();
        setSubmitted(true);
        auth
        .signInWithEmailAndPassword(values.email,values.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setValues({email: '', password: ''})
            setSubmitted(false)
            navigation.navigate('HomeNavigator')
            console.log('Login with email: ', user.email);
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorMessage);
            // console.log(errorMessage);
            // ..
        });
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}>
                <LogoLettutor/>
                <View>
                    <View style={styles.form__input}>
                        <Text>Email</Text>
                        <TextInput style={styles.input} placeholder="example@email.com" keyboardType="email-address"
                        value={values.email} name="email"
                        onChangeText={handleEmailChange}
                        />
                        {submitted && !values.email ? <Text style={styles.textWarning}>Email can not be empty</Text>: null}
                    </View>
                    <View style={styles.form__input}>
                        <Text>Password</Text>
                        <TextInput style={styles.input} placeholder="******" secureTextEntry={true}
                        value={values.password} name="password"
                        onChangeText={handlePasswordChange}/>
                        {submitted && !values.password?<Text style={styles.textWarning}>Password can not be empty</Text>:null}

                    </View>
                </View>
                <View style={styles.forgotPass}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('ForgetPassword')
                    }}>
                        <Text style={styles.textForgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}
                    onPress={handleSubmit}>
                        <Text style={styles.title}>Log In</Text>
                    </TouchableOpacity>
                    {/* <Btn title={"Log In"}></Btn> */}
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
                        navigation.navigate('Register')
                    }}>
                        <Text style={styles.SignUp}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create(
    {

        container:{
            // backgroundColor: '#fff',
            marginTop:50,
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
        },
        textWarning:{
            color: 'red',
            marginBottom: 24,
            marginTop: -8
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
        }
    }
)