import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

import TagItem from "./TagItem";
import Avt from '../assets/avt.jpg'
import VietNam from '../assets/vietnam.png'


export default function Teacher(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.HeaderRight}>
                    <Image style={styles.avtimg} source={Avt}/>
                    <Text style={styles.name} >April Corpur</Text>
                    <View style={styles.labelCountry}>
                        <Image style={styles.ensign} source={VietNam}/>
                        <Text>Viet Nam</Text>
                    </View>
                    <View style={styles.rating}>
                        <Text style={styles.nonrating}>Chưa có đánh giá</Text>
                        {/* <AntDesign name="star" size={18} color="#FADB14" />
                        <AntDesign name="star" size={18} color="#FADB14" />
                        <AntDesign name="star" size={18} color="#FADB14" />
                        <AntDesign name="star" size={18} color="#FADB14" />
                        <AntDesign name="star" size={18} color="#FADB14" /> */}
                    </View>
                </View>
                <View style={styles.HeaderLeft}>
                    <AntDesign name="hearto" size={24} color="blue" />
                    {/* <AntDesign name="heart" size={24} color="red" /> */}
                </View>
            </View>
            <View style={styles.tagItem}>
                <TagItem title='Tiếng Anh cho trẻ em'/>
                <TagItem title='MOVERS'/>
                <TagItem title='Tiếng Anh cho công việc'/>
            </View>
            <View style={styles.descript}>
                <Text numberOfLines={4} style={styles.textDescript}>Hello there! I am an Industrial Engineer in the profession but chose to do online teaching because I love to meet different learners. I am an outgoing person and I have this passion for dealing with different people and seeing them progress with my help as their teacher. In fact, making friends is one of my best skills. I am very good at adapting to new environments and new situations. I am very friendly and can easily get along well with everyone.
                        I have obtained a 120-Hour TEFL Certificate. I get a variety of teaching techniques. I know that there are fast and not so fast learners. So don't worry, I will be with you every step of the way going at your own pace. Let's practice what you already know and add something new each day. 
                        With my skills and experiences, I can assure you that I can provide adequate English learning effectively and efficiently. Together, let's make English learning fun.
                </Text>
            </View>
           <View style={styles.BookingContact}>
                <View style={styles.TeacherBooking}>
                    <TouchableOpacity style={styles.booking} onPress={()=>{
                        Alert.alert('Booking')
                    }}>
                        <Feather name="calendar" size={24} color="#0071F0" />
                        <Text style={{color: '#0071F0', marginLeft: 4}}>Đặt lịch</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.TeacherBooking}>
                    <TouchableOpacity style={styles.booking} onPress={()=>{
                        Alert.alert('Nhắn tin')
                    }}>
                        <Feather name="message-square" size={24} color="#0071F0" />
                        <Text style={{color: '#0071F0', marginLeft: 4}}>Nhắn tin</Text>
                    </TouchableOpacity>
                </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // margin: 30,
        marginBottom:10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 16,
    },
    header:{
        flexDirection: "row"
    },
    HeaderRight:{
        flex: 4,
        marginTop: 20,
        marginLeft: 20
    },
    HeaderLeft:{
        flex: 1,
        alignItems: "flex-end",
        marginRight:20,
        marginTop: 20
    },
    avtimg:{
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'gray',
    },
    name:{
        fontSize: 24,
        fontWeight: "700",
        marginTop: 8
    },
    ensign:{
        width: 40,
        height: 30,
        marginRight: 10
    },
    labelCountry:{
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 8,
        marginBottom: 8
    },
    rating:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    nonrating:{
        fontStyle: "italic",
        opacity: 0.6
    },
    tagItem:{
        flexDirection: "row",
        flexWrap: 'wrap',
        marginLeft: 12
    },
    descript:{
        marginHorizontal: 20,
        marginVertical: 15
    },
    textDescript:{
        color: '#777'
    },
    booking:{
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 50,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#0071F0'
    },
    TeacherBooking:{
        flexDirection:'row',
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    BookingContact:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginBottom: 20
    }
})