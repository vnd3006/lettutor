import React from "react";
import {View,Text,TouchableOpacity, StyleSheet, Alert} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

export default function HeaderBookingNoClass(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Chào mừng bạn đến với LetTutor!</Text>
            <Text style={styles.textBody}>Bạn không có buổi học nào, bấm vào bên dưới để đặt</Text>
            <View >
                <TouchableOpacity style={styles.booking} onPress={()=>{
                    Alert.alert('Booking')
                }}>
                    <EvilIcons name="calendar" size={24} color="#0C3BDB" />
                    <Text style={{color: '#0C3BDB'}}>Đặt lịch</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:400,
        backgroundColor: '#0C3BDB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        fontSize: 32,
        color: '#fff',
        textAlign: "center",
        lineHeight: 50,
    },
    textBody:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 30
    },
    booking:{
        flexDirection:'row',
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
        marginTop: 40
    }
})