import React from "react";
import {View,Image, Text, StyleSheet, ScrollView} from 'react-native'
import Header from "../../Component/Header";

import calendar from '../../assets/calendar.png'
// import EmptySchedule from "../../Component/EmptySchedule";
import ScheduleItem from "../../Component/ScheduleItem";
export default function Schedule(){
    return(
        <View>
            <Header/>
            <View style={styles.container}>
                <ScrollView>
                    <Image style={styles.img} source={calendar}/>
                    <Text style={styles.HeaderTitle}>Lịch đã đặt</Text>
                    <View style={styles.HeaderDescript}>
                        <Text style={{fontSize: 18}}>Đây là danh sách những khung giờ bạn đã đặt</Text>
                        <Text style={{fontSize: 18}}>Bạn có thể theo dõi khi nào buổi học bắt đầu, tham gia buổi học bằng một cú nhấp chuột hoặc có thể hủy buổi học trước 2 tiếng.</Text>
                    </View>
                    <View>
                        <ScheduleItem/>
                        <ScheduleItem/>
                        <ScheduleItem/>
                        <ScheduleItem/>
                        <ScheduleItem/>


                    </View>
                    <View style={{height: 300}}></View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        marginHorizontal: 10,
        marginVertical: 20
    },
    img:{
        width: 120,
        height: 120
    },
    HeaderTitle:{
        fontSize: 30,
        fontWeight: '700'
    },
    HeaderDescript:{
        marginVertical: 15,
        padding: 5,
        borderLeftWidth: 5,
        borderLeftColor: '#f0f0f0'
    }
})