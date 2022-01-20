import React ,{useState, useContext} from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, Alert, ScrollView} from 'react-native'
import Header from "../../Component/Header";
import { AntDesign } from "@expo/vector-icons";
import VietNam from '../../assets/vietnam.png'
import { Feather } from '@expo/vector-icons';
import TagItem from "../../Component/TagItem";
import BookingAClass from "../../Component/BookAClass";
// import Video from "react-native-video";
import { Video } from 'expo-av';
import Avt from '../../assets/avt.jpg'

import audio from '../../assets/video.mp4'
import { ApiContext } from "../../context/APIcontext";
import { url_base } from "../../api/connect";
import axios from 'axios'
import { Rating } from 'react-native-ratings';
import { FlagButton } from 'react-native-country-picker-modal';
import ListTag from "../../Component/ListTag";
import { getListLabel } from "../../bussiness/specialies";



export default function TeacherDetail({route}){
    const id = route.params.id

    const {token} = useContext(ApiContext)
    const [data,setData] = useState({});
    const video = React.useRef(null);
    const [loadData,setLoadData] = useState(true)
    const getData = async () => {
        try {
            const infor = await axios.get(url_base + 'tutor/' + id, { headers: { 'Authorization': 'Bearer ' + token } })
            setData(infor.data);
            setLoadData(false)
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        getData()
    }, []
    )
  
    return(
        <View>
            {loadData?null:
        <View style={{backgroundColor: 'white'}}>
            <Header/>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image style={styles.avt} source={{uri: data.User.avatar}}/>
                        <View style={styles.infoTeacher}>
                            <Text style={styles.nameteacher}>{data.User.name}</Text>
                            {data.rating != 0?
                                <View >
                                    <Rating readonly={true}
                                    startingValue={data.rating}
                                    style={{ marginVertical: 1, alignSelf: 'flex-start'}}
                                    imageSize={20}/>
                                </View>:
                                <View style={styles.rating}>
                                    <Text style={styles.nonrating}>Chưa có đánh giá</Text>
                                </View>
                            }
                            <View style={styles.labelCountry}>
                                <FlagButton {...{ countryCode: data.User.country }} withCountryNameButton />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.descript}>
                        {data.bio}
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
                            source={{uri: data.video}}
                            useNativeControls
                            resizeMode='contain'
                            isLooping/>
                    </View>
                    <View >
                        <Text style={styles.parttitle}>Ngôn ngữ</Text>
                        <View style={styles.language}>
                        <ListTag tags={data.languages.split(',')} />
                            {/* <TagItem title={'English'}/> */}
                        </View>
                    </View>
                    <View >
                        <Text style={styles.parttitle}>Chuyên ngành</Text>
                        <View style={styles.language}>
            
                            <ListTag tags={getListLabel(data.specialties.split(","))} />
                            
                        </View>
                    </View>
                    <View >
                        <Text style={styles.parttitle}>Sở thích</Text>
                        <Text style={styles.partdescript}>{data.interests}</Text>
                    </View>
                    <View >
                        <Text style={styles.parttitle}>Kinh nghiệm giảng dạy</Text>
                        <Text style={styles.partdescript}>{data.experience}</Text>
                    </View>
                    <View>
                        <BookingAClass/>
                    </View>
                </View>
                <View style={{height: 200}}/>
            </ScrollView>
        </View>
            }
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
        flexDirection: "row",
        flexWrap: 'wrap',
    },
    partdescript:{
        color: '#888',
        fontWeight: '600'
    }
})