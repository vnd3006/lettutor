import React, {useContext,useState} from "react";
import {View,Image, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import Header from "../../Component/Header";
import calendar from '../../assets/calendar.png'
import EmptySchedule from "../../Component/EmptySchedule";
import ScheduleItem from "../../Component/ScheduleItem";
import { ApiContext } from "../../context/APIcontext";
import { getUpcomingSchedule } from "../../services/schedule";
import { cancelLesson } from '../../services/booking';
export default function Schedule(){
    const {token} = useContext(ApiContext)
    const [loadData,setLoadData]=useState(true)
    const [data,setData]=useState([])
    const [page,setPage] = useState(1)
    const [count,setCount] = useState(0)
    const [itemPerPage,setItemPerPage] = useState(4)
    const [searchKey, setSearchKey] = useState('');


    const getData = async ()=>{
        setLoadData(true)
        const res = await getUpcomingSchedule(token,page,itemPerPage)
        setData(res.rows)
        setCount(res.count)
        setLoadData(false)
    }

    const filter = (item) => {
        const key = searchKey.toLowerCase()
        return item.studentRequest?.toLowerCase().includes(key) || item.scheduleDetailInfo.scheduleInfo.tutorInfo.name.toLowerCase().includes(key)
    }

    React.useEffect(()=>{
        getData()
    },[page,itemPerPage])

    const Upcoming = ({item}) =>{
        const tutorInfo = item.scheduleDetailInfo.scheduleInfo.tutorInfo;
        const scheduleInfo = item.scheduleDetailInfo.scheduleInfo;
        const endTime = new Date(scheduleInfo.endTimestamp);
        const startTime = new Date(scheduleInfo.startTimestamp);
       
        return(
            <ScheduleItem tutorInfo={tutorInfo} scheduleInfo={scheduleInfo} endTime={endTime} startTime={startTime} require = {item.studentRequest} id={item.scheduleDetailInfo.id} />
        )
    }
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
                        <FlatList
                        data={data.filter(filter)}
                        renderItem={Upcoming}
                        keyExtractor={item => item.id.toString()}
                        refreshing={false}
                        onRefresh={getData}
                        ListEmptyComponent={() => <EmptySchedule/>}/>

                        {/* <EmptySchedule/> */}
                        {/* <ScheduleItem/>
                        <ScheduleItem/>
                        <ScheduleItem/>
                        <ScheduleItem/>
                        <ScheduleItem/> */}


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