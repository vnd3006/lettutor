import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { FlagButton } from 'react-native-country-picker-modal';
import ListTag from "./ListTag";

import TagItem from "./TagItem";

import { Rating } from 'react-native-ratings';
import { getListLabel } from "../bussiness/specialies";


export default function Teacher(props){
    const onPressItem = ()=>{
        props.navigation.navigate('TeacherDetail',{id: props.item.userId}) 
    }

    const listSpecialies = getListLabel(props.item.specialties.split(","));
    return(
        <TouchableOpacity onPress={onPressItem}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.HeaderRight}>
                        <Image style={styles.avtimg} source={{ uri: props.item.avatar }}/>
                        <Text style={styles.name} >{props.item.name}</Text>
                        <View style={styles.labelCountry}>
                        <FlagButton {...{ countryCode: props.item.country }} containerButtonStyle={{ margin: 0, padding: 0 }} withCountryNameButton placeholder=""/>
                        </View>
                        {props.item.rating != undefined?
                        <Rating readonly={true}
                        startingValue={props.item.rating}
                        style={{ marginVertical: 1, alignSelf: 'flex-start'}}
                        imageSize={20}/>:
                        <View style={styles.rating}>
                            <Text style={styles.nonrating}>Chưa có đánh giá</Text>
                        </View>
                        }
                    </View>
                    <View style={styles.HeaderLeft}>
                        <AntDesign name="hearto" size={24} color="blue" />
                        {/* <AntDesign name="heart" size={24} color="red" /> */}
                    </View>
                </View>
                <View style={styles.tagItem}>
                    <ListTag tags={listSpecialies}/>
                </View>
                <View style={styles.descript}>
                    <Text numberOfLines={4} style={styles.textDescript}>
                            {props.item.bio}
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
        </TouchableOpacity>
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