import React from "react";
import {View,Text, StyleSheet} from 'react-native'
// import { AntDesign } from '@expo/vector-icons';

import InfoTeacher from "./InfoTeacher";
export default function ScheduleItemHistory(props){
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.header}>{props.startTime.toUTCString().substring(0, 16)}</Text>
                <InfoTeacher avt={props.tutorInfo.avatar} name={props.tutorInfo.name} country={props.tutorInfo.country} />
                <View>
                    <Text style={styles.time}>Thời gian học: {props.startTime.toString().substring(16, 21)} - {props.endTime.toString().substring(16, 21)}</Text>
                </View>
                <View style={styles.requireandrate}>
                    <View>
                        {props.require== null?
                        <Text style={styles.requirement}>Không có yêu cầu cho buổi học</Text>:
                        <Text style={styles.requirement}>{props.require}</Text>
                        }
                    </View>
                    <Text style={{paddingVertical: 12, paddingHorizontal: 20}}>Gia sư chưa có đánh giá</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F0F0F0',
        marginVertical: 10
    },
    body:{
        margin: 15
    },
    header:{
        fontSize: 24,
        fontWeight: '700'
    },
   
    time:{
        fontSize: 22,
        textAlign:'center',
        backgroundColor: '#fff',
        marginTop: 30,
        paddingVertical: 10
    },
    requireandrate:{
        backgroundColor:'#fff',
        marginTop: 20
    },
    requirement:{
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    }
})