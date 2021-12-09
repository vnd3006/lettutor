import React from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet, TouchableOpacityBase} from 'react-native'
import Header from "./Header";
import { FontAwesome5 } from '@expo/vector-icons';
import Avt from '../assets/avt.jpg'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../Screen/Authentication/LogIn";
import Profile from "../Screen/AccountManagement/Profile";
import ScheduleHistory from "../Screen/Schedule/ScheduleHistory";
export default function Menu({navigation}){
    return(
        <View>
            <Header/>
            <View style={styles.container}>
                <TouchableOpacity style={styles.row} onPress={()=>{navigation.navigate('Profile')}}>
                    <Image style={styles.avtimg} source={Avt}/>
                    <Text style={styles.title}>Vo Ngoc Duy</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.row}>
                    <FontAwesome5 name="book-medical" size={40} color="#0071F0" style={styles.icon} />
                    <Text style={styles.title}>Mua buổi học</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.row}>
                    <FontAwesome5 name="wallet" size={40} color="#0071F0" style={styles.icon} />
                    <Text style={styles.title}>50 000đ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <FontAwesome5 name="key" size={40} color="#0071F0" style={styles.icon} />
                    <Text style={styles.title}>Đổi mật khẩu</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.row}>
                    <FontAwesome5 name="chalkboard-teacher" size={40} color="#0071F0" style={styles.icon} />
                    <Text style={styles.title}>Gia sư</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.row}>
                    <FontAwesome5 name="calendar-check" size={40} color="#0071F0" style={styles.icon} />
                    <Text style={styles.title}>Lịch học</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.row} onPress={()=>{navigation.navigate('ScheduleHistory')}}>
                    <FontAwesome5 name="history" size={40} color="#0071F0" style={styles.icon} />
                    <Text style={styles.title}>Lịch sử</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.row}>
                    <FontAwesome5 name="graduation-cap" size={40} color="#0071F0" style={styles.icon} />
                    <Text style={styles.title}>Khóa học</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.row} onPress={() => {navigation.navigate('LogIn')}}>
                    <FontAwesome5 name="sign-out-alt" size={40} color="#0071F0" style={styles.icon} />
                    <Text style={styles.title}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 24
    },
    avtimg:{
        width: 44,
        height: 44,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'gray',
        marginRight: 6
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    title:{
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 24
    },
    icon:{
        width: 50
    }
})