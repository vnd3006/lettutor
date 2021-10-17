import React from "react";
import {View,Text,StyleSheet, Image,ScrollView,TextInput, TouchableOpacity, Alert, TouchableOpacityBase} from 'react-native'
import Header from "../../Component/Header";
import Avt from '../../assets/avt.jpg'
export default function Profile(){
    return(
        <View>
            <Header/>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.headInf}>
                        <View>
                        <Image style={styles.avt} source={Avt}/>
                        </View>
                        <Text style={styles.nameUser}>Ngoc Duy</Text>
                        <Text style={styles.IDUser}>ID: 123456789</Text>
                    </View>
                    <View>
                        <View style={styles.borderTK}>
                            <Text style={styles.textTK}>Tài khoản</Text>
                        </View>
                        <View>
                            <View style={styles.form__input}>
                                <Text>Tên</Text>
                                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="default"/>
                            </View> 
                            <View style={styles.form__input}>
                                <Text>Email</Text>
                                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="email-address"/>
                            </View>    
                            <View style={styles.form__input}>
                                <Text>Số điện thoại</Text>
                                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="default"/>
                            </View> 
                            <View style={styles.form__input}>
                                <Text>Quốc gia</Text>
                                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="default"/>
                            </View>     
                            <View style={styles.form__input}>
                                <Text>Ngày sinh</Text>
                                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="default"/>
                            </View>  
                            <View style={styles.form__input}>
                                <Text>Trình độ</Text>
                                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="default"/>
                            </View>  
                            <View style={styles.form__input}>
                                <Text>Muốn học</Text>
                                <TextInput style={styles.input} placeholder="example@email.com" keyboardType="default"/>
                            </View>          
                        </View>
                    </View>
                        
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btntext}>Lưu thay đổi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomScreen}>
                </View>
            </ScrollView>
        
        </View>
    )
}

const styles= StyleSheet.create({
   
    body:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        borderTopColor: '#286AD5',
        borderTopWidth: 6,
        borderRadius: 4,
        // marginBottom: 50,
        borderWidth: 1,
        borderColor: '#F5F6FA'
        // backgroundColor: 'red'
    },
    avt:{
        marginTop: 50,
        marginBottom: 10,
        height: 130,
        width: 130,
        borderRadius: 65,
        borderColor: '#e8e8e8',
        borderWidth: 2,
        
    },
    headInf:{
        height: 300,
        // backgroundColor: "red",
        alignItems: "center"
    },
    nameUser:{
        fontSize: 28,
        fontWeight: "600"
    },
    IDUser:{
        color:'#777'
    },
    borderTK:{
        height: 46,
        backgroundColor: '#F5F6FA',
        justifyContent: "center"

    },
    textTK:{
        marginLeft: 8
    },
    input:{
        marginTop:4,
        marginBottom:12 ,
        height: 48,
        borderWidth: 0.5,
        borderRadius: 5,
        paddingLeft: 20
    },
    form__input:{
        marginLeft: 20,
        marginRight: 20
    },
    btn:{
        width: 120,
        height: 40,
        backgroundColor: '#286AD5',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    btntext:{
        color: '#fff'
    },
    bottom:{
        marginBottom: 40,
        alignItems: 'flex-end',
        marginRight: 20
    },
    bottomScreen:{
        height: 200
    }
})