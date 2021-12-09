import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Header from "../../Component/Header";
import HeaderBookingClass from "../../Component/HeaderBookingClass";
import TagItemNoActive from "../../Component/TagItemNoActive";
import TagItem from "../../Component/TagItem";
import Teacher from "../../Component/Teacher";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function TeacherBooking({navigator}){
    return(
        <View>
            <Header/>
            <View>
                <ScrollView>
                    <HeaderBookingClass/>
                    <View style={styles.body}>
                        <Text style={styles.headerBody}>Tìm kiếm gia sư</Text>
                        <View style={styles.ItemOption}>
                            <TagItem title={'Tất cả'}/>
                            <TagItemNoActive title={'Tiếng Anh cho trẻ em'}/>
                            <TagItemNoActive title={'Tiếng Anh cho công việc'}/>
                            <TagItemNoActive title={'Giao tiếp'}/>
                            <TagItemNoActive title={'STARTERS'}/>
                            <TagItemNoActive title={'MOVERS'}/>
                            <TagItemNoActive title={'TOEIC'}/>
                            <TagItemNoActive title={'IELTS'}/>
                        </View>
                        <Text style={styles.tutor}>Gia sư được đề xuất</Text>
                        <Teacher/>
                        <Teacher/>
                        <Teacher/>
                        <Teacher/>
                        <Teacher/>
                        <Teacher/>
              
                    </View>
                    <View style={{marginBottom: 250}}></View>
                </ScrollView>
            </View>
        </View>
    )
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
    }
})