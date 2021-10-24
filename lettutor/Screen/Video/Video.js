import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Header from '../../Component/Header'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const {height}= Dimensions.get('window')
export default function Video(){
    return(

    <View>
        {/* <Header/> */}
        <View style={styles.container}>
            <View style={styles.time}>
                <Text style={styles.timetext}>00 :</Text>
                <Text style={styles.timetext}>00: </Text>
                <Text style={styles.timetext}>01</Text>
            </View>
            <View style={styles.body}></View>
            <View style={styles.iconcontrol}>
                <TouchableOpacity style={styles.iconitem}>
                    <Ionicons name="camera-reverse-outline" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconitem}>
                    <Feather style={styles.icon} name="camera" size={24} color="black" />
                    {/* <Feather style={styles.icon} name="camera-off" size={24} color="black" /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconitem}>
                    <Feather style={styles.icon} name="mic" size={24} color="black" />
                    {/* <Feather style={styles.icon} name="mic-off" size={24} color="black" /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconitemClose}>
                    <Feather name="phone" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

const styles=StyleSheet.create({
    time:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        height: 50
    },
    timetext:{
        fontSize: 30
    },
    iconcontrol:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },

    iconitem:{
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#c1c1c1',
        justifyContent:'center',
        alignItems:'center',
    },
    iconitemClose:{
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        position:'relative',
        height: 50,
        flexDirection:'column',
        // justifyContent:'space-between',
        // marginBottom: 50
    },
    body:{
        height: height-150
    }
})