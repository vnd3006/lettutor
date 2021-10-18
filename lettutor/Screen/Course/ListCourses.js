import React, {useState} from "react";
import {View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert,} from 'react-native'
import Header from "../../Component/Header";
import { AntDesign } from '@expo/vector-icons';
import Course from "../../Component/Course";
import { Ionicons } from '@expo/vector-icons';
import { Picker } from "@react-native-community/picker";

import LogoCourse from '../../assets/course.png'

const PickLevel = ()=>{
    const [selectedValueLevel, setselectedValueLevel] = useState(0);
    return(
        <View>
            <Picker 
            selectedValue ={selectedValueLevel}
            style={{height: 50, width: 220}}
            onValueChange={(itemValue, itemIndex) => setselectedValueLevel(itemValue)}>
                <Picker.Item label="Sắp xếp theo độ khó" value="0"/>
                <Picker.Item label="Độ khó giảm dần" value="1" />
                <Picker.Item label="Độ khó tăng dần" value="2" /> 

            </Picker>
        </View>
    )
} 
export default function ListCourses(){
    return(
        <View>
            <Header/>
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.CoureseListHeader}>
                            <View>
                                <Image style={styles.courseImg} source={LogoCourse}/>
                            </View>
                            <View style={styles.RightHeader}>
                                <Text style={styles.HeaderTitle}>Khám phá các khóa học</Text>
                                <View style={styles.HeaderSearch}>
                                    <TextInput style={styles.input}  placeholder="Khóa học" keyboardType="default"/>
                                    <TouchableOpacity style={styles.IconSearch} onPress={()=>{
                                        Alert.alert('Search')
                                    }}>
                                        <Ionicons  name="md-search-sharp" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <Text>LiveTutor đã xây dựng nên các khóa học của các lĩnh vực trong cuộc sống chất lượng, bài bản và khoa học nhất cho những người đang có nhu cầu trau dồi thêm kiến thức về các lĩnh vực.</Text>
                        <View>
                            <View style={styles.PickLevel}>
                                {<PickLevel style={styles.PickLevelitem}/>}
                            </View>
                        </View>   
                        <Course/>     
                        <Course/>  
                        <Course/>  
                        <Course/>  
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight: 10,
        marginLeft: 10,
        marginTop: 30
    },
    courseImg:{
        width: 120,
        height: 120
    },
    input:{
        height: 40,
        borderWidth: 0.5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingLeft: 20,
        width: "100%",
        marginBottom: 2
        
    },
    CoureseListHeader:{
        flexDirection: 'row',
        marginBottom: 20
    },
    HeaderSearch:{
        flexDirection: 'row',
        alignItems: "center"
    },
    RightHeader:{
        flex: 1,
        marginLeft: 10,
        marginRight: 40
    },
    IconSearch:{
        height: 40,
        width: 40,
        borderWidth: 0.5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 2

    },
    HeaderTitle:{
        fontSize: 26,
        fontWeight: "700",
        marginBottom: 10
    },
    PickLevel:{
        position:"relative"
    },
    PickLevelitem:{
        position: "absolute",
    }
})