import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, Alert, ScrollView} from 'react-native'
import Header from "../../Component/Header";
import { AntDesign } from "@expo/vector-icons";
import VietNam from '../../assets/vietnam.png'
import { Feather } from '@expo/vector-icons';
import TagItem from "../../Component/TagItem";
// import Video from "react-native-video";
import { Video } from 'expo-av';
import Avt from '../../assets/avt.jpg'

import audio from '../../assets/video.mp4'

export default function TeacherDetail(){
    const video = React.useRef(null);
    return(
        <View>
            <Header/>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image style={styles.avt} source={Avt}/>
                        <View style={styles.infoTeacher}>
                            <Text style={styles.nameteacher}> J Dan</Text>
                            <View style={styles.rating}>
                                <Text style={styles.nonrating}>Chưa có đánh giá</Text>
                                {/* <AntDesign name="star" size={18} color="#FADB14" />
                                <AntDesign name="star" size={18} color="#FADB14" />
                                <AntDesign name="star" size={18} color="#FADB14" />
                                <AntDesign name="star" size={18} color="#FADB14" />
                                <AntDesign name="star" size={18} color="#FADB14" /> */}
                            </View>
                            <View style={styles.labelCountry}>
                                <Image style={styles.ensign} source={VietNam}/>
                                <Text>Viet Nam</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.descript}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti enim nam inventore magnam praesentium, eveniet molestias nobis, aut maxime doloribus? Voluptate velit enim error illo eos nisi corrupti delectus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident minus fugiat quisquam ipsa dolor suscipit placeat minima deleniti temporibus, blanditiis consequuntur velit cupiditate quam, ipsam laudantium illum ullam error. Impedit?
                    </Text>
                    <View style={styles.actionsection}>
                        <TouchableOpacity style={styles.icongroup} onPress={()=>{
                            Alert.alert('Nhắn tin')
                        }}>
                            <AntDesign name="message1" size={24} color="#0071F0" />
                            <Text style={styles.iconlabel}>Nhắn tin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icongroup} onPress={()=>{
                            Alert.alert('yêu thích')
                        }}>
                            <AntDesign name="hearto" size={24} color="#0071F0" />
                            {/* <AntDesign name="heart" size={24} color="#0071F0" /> */}
                            <Text style={styles.iconlabel}>Yêu thích</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icongroup} onPress={()=>{
                            Alert.alert('report')
                        }}>
                            <AntDesign name="warning" size={24} color="#0071F0" />
                            <Text style={styles.iconlabel}>Báo cáo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icongroup} onPress={()=>{
                            Alert.alert('Xem đánh giá')
                        }}>
                            <AntDesign name="staro" size={24} color="#0071F0" />
                            <Text style={styles.iconlabel}>Xem đánh giá</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={audio}
                            useNativeControls
                            resizeMode='contain'
                            isLooping/>
                    </View>
                    <View >
                        <Text style={styles.parttitle}>Ngôn ngữ</Text>
                        <View style={styles.language}>
                            <TagItem title={'English'}/>
                        </View>
                    </View>
                    <View >
                        <Text style={styles.parttitle}>Chuyên ngành</Text>
                        <View style={styles.language}>
                            <TagItem title={'Tiếng Anh cho công việc'}/>
                            <TagItem title={'Giao tiếp'}/>
                            <TagItem title={'Tiếng Anh cho trẻ em'}/>
                            <TagItem title={'TOEIC'}/>
                        </View>
                    </View>
                    <View >
                        <Text style={styles.parttitle}>Sở thích</Text>
                        <Text style={styles.partdescript}>Reading books, eating, playing badminton and playing with kids</Text>
                    </View>
                    <View >
                        <Text style={styles.parttitle}>Kinh nghiệm giảng dạy</Text>
                        <Text style={styles.partdescript}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vero ad quod dignissimos illo suscipit, libero minus, cumque adipisci quas deleniti vel similique saepe debitis quam tenetur dolor asperiores incidunt.</Text>
                    </View>
                    <View>
                        
                    </View>
                </View>
                <View style={{height: 200}}/>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginVertical: 30
    },
    avt:{
        width: 110,
        height: 110,
        borderRadius: 65
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
    header:{
        flexDirection: 'row',
        alignItems: "center"
    },
    nameteacher:{
        fontSize: 24,
        fontWeight: '700'
    },
    infoTeacher:{
        marginLeft: 20
    },
    descript:{
        color: '#888',
        lineHeight: 20,
        marginVertical: 16
    },
    actionsection:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    icongroup:{
        alignItems: "center"
    },
    iconlabel:{
        color: '#0071F0',
        marginTop: 5,
        marginBottom: 10
    },
    video: {
      height: 200,
    },
    parttitle:{
        fontSize: 20,
        fontWeight: '700',
        marginTop: 16,
        marginBottom: 8
    },
    language:{
        flexDirection:'row',
        flexWrap: 'wrap'
    },
    partdescript:{
        color: '#888',
        fontWeight: '600'
    }
})