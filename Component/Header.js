import React, {useState} from "react";
import { Feather } from '@expo/vector-icons';
import { View, Image,StyleSheet, TouchableOpacity } from "react-native";
import LogoFull from '../assets/LogoFull.png'
import VietNam from '../assets/vietnam.png'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import Menu from "./Menu";
export default function Header(){
    const [checkClick, setCheckClick] = useState(false)

    const handleClick = (e)=>{
        if(!checkClick){
            setCheckClick(true)
            console.log('true');
            // props.navigator.navigate('Menu')
        }
        else{
            setCheckClick(false)
            console.log("false");
        }
    }
    return(
    <View style={styles.header}>
        <View>
            <Image style={styles.logo} source={LogoFull}/>
        </View>
        <View style={styles.Iconmenu}>
            <View >
                <Image style={styles.iconImg} source={VietNam}/>
            </View>
            {/* <TouchableOpacity onPress={handleClick}>
              <Feather name="menu" size={28} color="black" />
            </TouchableOpacity> */}
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingTop: 18,
        height:70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
        backgroundColor: '#fff'
  
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
        // marginRight: 12,
    },
    Iconmenu:{
        flexDirection: "row",
        marginRight: 20,
     
    },
})