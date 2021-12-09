import React from "react";
import {View,Text, StyleSheet,TouchableOpacity, Alert} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import InfoTeacher from "./InfoTeacher";
export default function ScheduleItem(){
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.header}>T5, 21 Thg 10 21</Text>
                <Text >1 buổi học</Text>
                <InfoTeacher/>
                <View style={styles.timelearn}>
                    <Text style={styles.time}>Thời gian học: 00:00 - 00:25</Text>
                    <TouchableOpacity onPress={()=>{Alert.alert('Hủy')}}>
                        <View style={styles.close}>
                            <AntDesign name="closesquare" size={24} color="#FF4D4F" />
                            <Text style={{color: "#FF4D4F", marginLeft: 10  }}>Hủy</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.requirement}>
                        <View style={styles.requireHeader}>
                            <Text>Yêu cầu cho buổi học</Text>
                            <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={()=>{Alert.alert('Chỉnh sửa yc')}}>
                                <Text style={{color: '#0071F0'}}>Chỉnh sửa yêu cầu</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.requireDetail}>
                        Hiện tại không có yêu cầu cho lớp học này. Xin vui lòng viết ra bất kỳ yêu cầu nào cho giáo viên nếu có.
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{alignItems:'flex-end'}} disabled={true}>
                    <Text style={styles.btn}>Vào buổi học</Text>
                </TouchableOpacity>
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
        fontSize: 24,
        marginTop: 30,
        paddingVertical: 10,
        marginHorizontal: 15
    },
    requireHeader:{
        backgroundColor:'#fafafa',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    requirement:{
        margin: 15,
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    requireDetail:{
        paddingHorizontal: 20,
        paddingVertical: 12,
        opacity: 0.4
    },
    close:{
        flexDirection: 'row',
        alignItems: "center",
        borderColor: "#FF4D4F",
        borderWidth: 1,
        backgroundColor: '#fff',
        width: 80,
        justifyContent: "center",
        paddingVertical: 4,
        marginLeft: 15
    },
    timelearn:{
        backgroundColor: '#fff',
        marginVertical: 28,
    },
    btn:{
        textAlign: "center",
        backgroundColor: '#F5F5F5',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#999',
        // opacity: 0.8,
        color: '#888'
    },
    btnActive: {
        textAlign: "center",
        backgroundColor: '#0071F0',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#0C3BDB',
        // opacity: 0.8,
        color: '#fff'
    }
})