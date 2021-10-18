import React from "react";
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

export default function HeaderBookingClass(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Tổng số giờ bạn đã học là 12 giờ 55 phút</Text>
            <Text style={styles.textBody}>Buổi học sắp diễn ra</Text>
            <View style={styles.Timer}>
                <View style={styles.classTime}>
                    <Text style={styles.TimeOpen}>T3, 19 - 10 - 2021</Text>
                    <Text style={styles.TimeOpen}>00:00 - 00:30</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.booking}>
                        <EvilIcons name="calendar" size={24} color="#0C3BDB" />
                        <Text style={{color: '#0C3BDB'}}>Vào lớp học</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View >
                <TouchableOpacity style={styles.booking}>
                    <EvilIcons name="calendar" size={24} color="#0C3BDB" />
                    <Text style={{color: '#0C3BDB'}}>Đặt thêm</Text>
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

    },
    classTime:{
        marginRight: 50
    },
    Timer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 30
    },
    TimeOpen:{
        fontSize: 20,
        color: '#fff'
    }
})