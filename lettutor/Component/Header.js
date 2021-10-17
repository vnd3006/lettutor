import React from "react";
import { Feather } from '@expo/vector-icons';
import { View, Image,StyleSheet } from "react-native";
import LogoFull from '../assets/LogoFull.png'
import VietNam from '../assets/vietnam.png'

export default function Header(){
    return(
        <View style={styles.header}>
        <View>
            <Image style={styles.logo} source={LogoFull}/>
        </View>
        <View style={styles.Iconmenu}>
            <View >
                <Image style={styles.iconImg} source={VietNam}/>
            </View>
            <View>
              <Feather name="menu" size={28} color="black" />
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
  
    },
    logo:{
        height:40,
        width: 178,
        marginLeft: 8
    },
    iconImg:{
        height: 28,
        width: 28,
        borderRadius: 50,
        marginRight: 12,
    },
    Iconmenu:{
        flexDirection: "row",
        marginRight: 20,
     
    },
})