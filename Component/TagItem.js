import React from "react";
import {View, Text,StyleSheet, Vibration} from 'react-native'

export default function TagItem({item}){
    
    return(
        <View>
            <View style={styles.Item}> 
                <Text style={styles.TagItem}>{item}</Text>
            </View>
        </View>
        
    )
}

const styles=StyleSheet.create({
    Item:{
        flexWrap: "wrap",
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5
    },
    TagItem:{
        backgroundColor:'#DDEAFF',
        color: '#0071F0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
    }
})