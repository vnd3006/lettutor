import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import AVT from '../assets/avt.jpg'
import VietNam from '../assets/vietnam.png'

export default function InfoTeacher(){
    return(
        <View style={styles.info}>
            <Image style={styles.avt} source={AVT}/>
            <View>
                <Text style={styles.name}>J Dan</Text>
                <View style={styles.lablecountry}>
                    <Image style={styles.ensign} source={VietNam}/>
                    <Text style={styles.country}>Viet Nam</Text>
                </View>
                <View style={styles.message}>
                    <AntDesign name="message1" size={24} color="#0071F0" />
                    <Text style={{color:'#0071F0', marginLeft: 15}}>Nhắn tin</Text>
                </View>
             </View>
        </View>
    )
}

const styles=StyleSheet.create({
    info:{
        flexDirection:'row',
        // borderWidth: 1,
        // borderColor: '#000',
        marginTop: 12,
        padding: 10,
        backgroundColor: '#fff'
    },
    avt:{
        height: 90,
        width: 90,
        borderRadius: 50,
        marginRight: 20
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
    },
    ensign:{
        height: 30,
        width: 40,
        marginRight: 15
    },
    lablecountry:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    message:{
        flexDirection:'row',
        alignItems: "center"
    },
}
)