import React from "react";
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import NewBasicConversation from '../../assets/Course_NewBasicConversation.png'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import CourseDetail from "../Screen/Course/CourseDetail";
import { getLevelTitle } from "../../bussiness/course";
export default function CourseItem(props){
    const id = props.item.id
    const level = getLevelTitle(props.item.level)
    const onPressItem = ()=>{
        props.navigation.navigate('CourseDetail', {data :props.item})
    }
    return(
        <TouchableOpacity style={styles.headerCourse} onPress={onPressItem}>
            <Image style={styles.courseImg} source={{uri: props.item.imageUrl}}/>
            <View style={styles.topic}>
                <View>
                    <Text style={styles.topicHeader}>{props.item.name}</Text>
                </View>
                <View>
                    <Text style={styles.topicDescript}>{props.item.description}</Text>
                </View>
                <View style={styles.level_time}>
                    <Text style={styles.level}>{level}</Text>
                    <Text>{props.item.topics.length} chủ đề</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerCourse:{
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 0.5,
        marginBottom: 40
    },
    courseImg:{
        width: "100%",
        height: 240,
        borderRadius: 8
    },
    topic:{
        margin: 30
    },
    topicHeader:{
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 10
    },
    topicDescript:{
        fontWeight: "700",
        opacity: 0.4
    },
    level_time:{
        flexDirection: "row",
        marginTop: 12
    },
    level:{
        marginRight: 10
    }
})