import React from "react";
import {View,Text,Image, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import emptyImage from '../assets/empty.png'

export default function EmptySchedule(){
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={emptyImage}/>
            <Text>Dữ liệu trống</Text>
            <TouchableOpacity onPress={()=>{
                Alert.alert('booking')
            }}>
                <View style={styles.booking}>
                    <AntDesign name="calendar" size={24} color="#fff" />
                    <Text style={{color: '#fff', marginLeft: 10}}>Đặt lịch</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        container:{
            alignItems: "center",
            justifyContent: "center",
            padding: 20
        },
        img:{
            height: 100,
            width:100,
            marginVertical: 20,
            borderRadius: 10
        },
        booking:{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: '#0071F0',
            paddingHorizontal: 16,
            paddingVertical: 8,
            marginTop: 20,
            borderRadius: 5
        }
    }
)