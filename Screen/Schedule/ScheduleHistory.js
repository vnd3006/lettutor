import React,{useState,useEffect, useContext} from "react";
import {View,Image, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import Header from "../../Component/Header";

import ScheduleItemHistory from "../../Component/ScheduleItemHistory";
import historyImg from '../../assets/history.png'
import EmptySchedule from "../../Component/EmptySchedule";
import { ApiContext } from "../../context/APIcontext";
import { getHistorySchedule } from "../../services/schedule";
export default function ScheduleHistory(){
    const {token} = useContext(ApiContext)
    console.log("token==========",token);
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [loadData,setLoadData]=useState(true)

    const getData = async () =>{
        setLoadData(true)
        const res = await getHistorySchedule(token,page)
        setData(item => item.concat(res))
        setPage(page+1)
        setLoadData(false)
    }

    React.useEffect(()=>{
        getData()
    },[])

    const History = ({item})=>{
        const tutorInfo = item.scheduleDetailInfo.scheduleInfo.tutorInfo;
        const scheduleInfo = item.scheduleDetailInfo.scheduleInfo;
        const endTime = new Date(scheduleInfo.endTimestamp);
        const startTime = new Date(scheduleInfo.startTimestamp);
        return(
            <ScheduleItemHistory tutorInfo={tutorInfo} scheduleInfo={scheduleInfo} endTime={endTime} startTime={startTime} require ={item.studentRequest}/>
        )
    }
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
                    <FlatList
                        data={data}
                        renderItem={History}
                        keyExtractor={item => item.id.toString()}
                        refreshing={false}
                        onRefresh={getData}
                       
                    />
                        {/* <EmptySchedule/> */}
                        {/* <ScheduleItemHistory />
                        <ScheduleItemHistory />
                        <ScheduleItemHistory />
                        <ScheduleItemHistory />
                        <ScheduleItemHistory />
                        <ScheduleItemHistory /> */}

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