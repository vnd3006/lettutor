import React, {useState} from "react";
import {View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert,} from 'react-native'
import Header from "../../Component/Header";
import { AntDesign } from '@expo/vector-icons';
import Course from "../../Component/Course";
import { Ionicons } from '@expo/vector-icons';
// import { Picker } from "@react-native-community/picker";

import LogoCourse from '../../assets/course.png'

// const PickLevel = ()=>{
//     const [selectedValueLevel, setselectedValueLevel] = useState(0);
//     return(
//         <View>
//             <Picker 
//             selectedValue ={selectedValueLevel}
//             style={{height: 50, width: 220}}
//             onValueChange={(itemValue, itemIndex) => setselectedValueLevel(itemValue)}>
//                 <Picker.Item label="Sắp xếp theo độ khó" value="0"/>
//                 <Picker.Item label="Độ khó giảm dần" value="1" />
//                 <Picker.Item label="Độ khó tăng dần" value="2" /> 

//             </Picker>
//         </View>
//     )
// } 
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
                        <View style={styles.sectionselection}>
                            <View>
                                <TouchableOpacity style={styles.PickLevel}>
                                    <Text>Chọn cấp độ</Text>
                                    <AntDesign name="down" size={20} color="black" />
                                </TouchableOpacity>
                                <View style={styles.optionLevel}>
                                    <View style={[styles.listoptionLevel, styles.displayItem]}>
                                        <Text style={styles.ItemoptionActive}>Any level</Text>
                                        <Text style={styles.Itemoption}>Beginner</Text>
                                        <Text style={styles.Itemoption}>Upper-Beginner</Text>
                                        <Text style={styles.Itemoption}>Pre-Intermediate</Text>
                                        <Text style={styles.Itemoption}>Intermediate</Text>
                                        <Text style={styles.Itemoption}>Upper-Intermediate</Text>
                                        <Text style={styles.Itemoption}>Pre-Advance</Text>
                                        <Text style={styles.Itemoption}>Advance</Text>
                                        <Text style={styles.Itemoption}>Very Advance</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.PickLevel}>
                                    <Text>Chọn danh mục</Text>
                                    <AntDesign name="down" size={20} color="black" />
                                </TouchableOpacity>
                                <View style={styles.optionLevel}>
                                    <View style={[styles.listoptionLevel, styles.displayItem]}>
                                        <Text style={styles.ItemoptionActive}>Any level</Text>
                                        <Text style={styles.Itemoption}>Beginner</Text>
                                        <Text style={styles.Itemoption}>Upper-Beginner</Text>
                                        <Text style={styles.Itemoption}>Pre-Intermediate</Text>
                                        <Text style={styles.Itemoption}>Intermediate</Text>
                                        <Text style={styles.Itemoption}>Upper-Intermediate</Text>
                                        <Text style={styles.Itemoption}>Pre-Advance</Text>
                                        <Text style={styles.Itemoption}>Advance</Text>
                                        <Text style={styles.Itemoption}>Very Advance</Text>
                                        <Text style={styles.Itemoption}>Any level</Text>
                                        <Text style={styles.Itemoption}>Beginner</Text>
                                        <Text style={styles.Itemoption}>Upper-Beginner</Text>
                                        <Text style={styles.Itemoption}>Pre-Intermediate</Text>
                                        <Text style={styles.Itemoption}>Intermediate</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.PickLevel}>
                                    <Text>Sắp xếp theo độ khó</Text>
                                    <AntDesign name="down" size={20} color="black" />
                                </TouchableOpacity>
                                <View style={styles.optionLevel}>
                                    <View style={[styles.listoptionLevel, styles.displayItem]}>
                                        <Text style={styles.ItemoptionActive}>Độ khó giảm dần</Text>
                                        <Text style={styles.Itemoption}>Độ khó tăng dần</Text>
                                    </View>
                                </View>  
                            </View>
                        </View>
                        <View style={styles.tabOption}>
                            <Text style={styles.tabActive}>Khóa học</Text>
                            <Text style={styles.tabCourse}>E-book</Text>
                        </View>
                        <Text style={styles.titleHeader}>English for Beginners</Text>
                        <Course/>     
                        <Course/>  
                        <Course/>  
                        <Course/>  
                        <Text style={styles.titleHeader}>Conversational English</Text>
                        <Course/>     
                        <Course/>  
                        <Course/>  
                        <Course/>  
                    </View>
                    <View style={{height: 220}}></View>
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
        flexDirection:'row',
        borderWidth: 1,
        borderColor: '#999',
        // flex: 1,
        marginVertical: 8,
        opacity: 0.6, 
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 4,
        // position: 'relative',
        width: 160,

    },
    sectionselection:{
        flexDirection:'row',
        flexWrap: 'wrap'
    },
    optionLevel:{
        position:'absolute',
        zIndex: 1,
        height: 150,
        overflow:'scroll',

    },
    listoptionLevel:{
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        borderRadius: 4,
        width: 160,
        top: 40,
        left: 0,
        // paddingLeft: 10,
        backgroundColor: '#fff'
        // display: "none"
    },
    displayItem:{
        display: "none"
    },
    Itemoption:{
        paddingLeft: 10,
        paddingVertical: 4
    },
    ItemoptionActive: {
        paddingLeft: 10,
        paddingVertical: 4,
        backgroundColor: '#E6F7FF',
        fontWeight: '700'
    },
    tabOption:{
        flexDirection:'row',
        // paddingVertical: 16,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    tabCourse:{
        marginRight: 20,
    },
    tabActive:{
        marginRight: 20,
        borderBottomColor: '#0071F0',
        borderBottomWidth: 2,
        paddingBottom: 8,
        color: '#0071F0'
    },
    titleHeader:{
        fontWeight: '700',
        fontSize: 30,
        marginVertical: 20
    }
})