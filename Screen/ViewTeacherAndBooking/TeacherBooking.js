import React, { useState,useContext } from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from "../../Component/Header";
import HeaderBookingClass from "../../Component/HeaderBookingClass";
import HeaderBookingNoClass from "../../Component/HeaderBookingNoClass"
import TagItemNoActive from "../../Component/TagItemNoActive";
import TagItem from "../../Component/TagItem";
import Teacher from "../../Component/Teacher";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { handleListTutor } from "../../bussiness/tutorHandle";

import { getListTutor } from "../../services/tutor";
import { FlatList } from "react-native";
import { getTotal, getUpcomingSchedule } from "../../services/schedule";
import { ApiContext } from "../../context/APIcontext";
export default function TeacherBooking(props){
    const {token} = useContext(ApiContext)
    const [data,setData] = useState();
    const [total, setTotal] = React.useState(0);
    const [upcomingData, setUpcomingData] = React.useState(null);
    const getData = async () =>{
        try{
            const totalRes = await getTotal(token);
            setTotal(totalRes);
            const upcomingRes = await getUpcomingSchedule(token,1,20);
            setUpcomingData(upcomingRes.rows[0]);
            const res = await getListTutor(1,9,token);
            setData(handleListTutor(res.tutors.rows, res.favoriteTutor))
        } catch(error){
            console.log(error)
        }
    }
    React.useEffect(() => {
        getData();
    }, [])

    const navigate = props.navigation

    const LessonView = ()=>{
        return(
            <View>
                {getTotalTime(total,upcomingData,navigate)}
            </View>
        )
    }
    console.disableYellowBox = true;
    return(
        <View style={styles.cotainer}>
            <Header/>
            <View>
                <ScrollView>
                    <LessonView/>
                    {/* <HeaderBookingNoClass/> */}
                    <View style={styles.body}>
                        <Text style={styles.headerBody}>T??m ki???m gia s??</Text>
                        <View style={styles.ItemOption}>
                            {/* <TagItem title={'T???t c???'}/> */}
                            <TagItemNoActive title={'Ti???ng Anh cho tr??? em'}/>
                            <TagItemNoActive title={'Ti???ng Anh cho c??ng vi???c'}/>
                            <TagItemNoActive title={'Giao ti???p'}/>
                            <TagItemNoActive title={'STARTERS'}/>
                            <TagItemNoActive title={'MOVERS'}/>
                            <TagItemNoActive title={'TOEIC'}/>
                            <TagItemNoActive title={'IELTS'}/>
                        </View>
                        <Text style={styles.tutor}>Gia s?? ???????c ????? xu???t</Text>
                        
                        <FlatList
                        data ={data}
                        renderItem={({item})=><Teacher navigation = {props.navigation} item={item} token={token}/>}
                        keyExtractor={item => item.id.toString()}
                        refreshing={false}
                        onRefresh={getData}/>
 
              
                    </View>
                    <View style={{marginBottom: 250}}></View>
                </ScrollView>
            </View>
        </View>
    )
}

function getTotalTime(total, upcomingData,navigate){

    if(total === 0)
    {
        return <HeaderBookingNoClass /> 
    }else{
        const hours = parseInt(total / 60);
        const minutes = total % 60;
        const check = true;
        if(upcomingData == null){
            return <HeaderBookingClass navigation = {navigate} hour= {hours} min ={minutes} checknull = {check} startTime={0} endTime={0} date={0}/>
        }
        else{
            const detail = upcomingData.scheduleDetailInfo;
            const startTime = new Date(detail.startPeriodTimestamp);
            const endTime = new Date(detail.endPeriodTimestamp);
    
            return <HeaderBookingClass navigation = {navigate} hour= {hours} min ={minutes} date = {startTime.toString().substring(0,15)} startTime={startTime.toString().substring(16, 21)} endTime={endTime.toString().substring(16, 21)} checknull={!check}/>
        }        
    }
}

const styles = StyleSheet.create({
    body:{
        margin: 30
    },
    ItemOption:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    headerBody:{
        fontSize: 36,
        fontWeight: '700'
    },
    tutor:{
        fontSize: 20,
        fontWeight: '700',
        marginTop: 10
    },
    cotainer:{
        backgroundColor: 'white'
    }
})