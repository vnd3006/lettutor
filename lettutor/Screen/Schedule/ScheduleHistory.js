import React from "react";
import {View,Image, Text, StyleSheet, ScrollView} from 'react-native'
import Header from "../../Component/Header";

import ScheduleItemHistory from "../../Component/ScheduleItemHistory";
import historyImg from '../../assets/history.png'
import EmptySchedule from "../../Component/EmptySchedule";
export default function ScheduleHistory(){
    return(
        <View>
            <Header/>
            <View style={styles.container}>
                <ScrollView>
                    <Image style={styles.img} source={historyImg}/>
                    <Text style={styles.HeaderTitle}>Lịch sử các buổi học</Text>
                    <View style={styles.HeaderDescript}>
                        <Text style={{fontSize: 18}}>Đây là danh sách các bài học bạn đã tham gia</Text>
                        <Text style={{fontSize: 18}}>Bạn có thể xem lại thông tin chi tiết về các buổi học đã tham gia đã tham gia</Text>
                    </View>
                    <View>
                        {/* <EmptySchedule/> */}
                        <ScheduleItemHistory />
                        <ScheduleItemHistory />
                        <ScheduleItemHistory />
                        <ScheduleItemHistory />
                        <ScheduleItemHistory />
                        <ScheduleItemHistory />

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