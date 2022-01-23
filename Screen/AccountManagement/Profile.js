import React, {useContext,useState} from "react";
import {View,Text,StyleSheet, Image,ScrollView,TextInput, TouchableOpacity, Alert, TouchableOpacityBase} from 'react-native'
import Header from "../../Component/Header";
import Avt from '../../assets/avt.jpg'
import { ApiContext } from "../../context/APIcontext";
import { getUserInfo } from "../../services/userInfo";
import { getLevelTitle } from "../../bussiness/course";
import { getWantToLearnList } from "../../bussiness/specialies";
export default function Profile(){
    const {token} = useContext(ApiContext)
    const [data,setData] = useState([])
    const [wantolearn, setWantolearn] = useState([])
    const getData = async () =>{
        const res = await getUserInfo(token)
        setData(res)
        setWantolearn(getWantToLearnList(res.learnTopics, res.testPreparations))
 
    }

    React.useEffect(()=>{
        getData()
    },[])
        
   

    
    return(
        <View>
            <Header/>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.headInf}>
                        <View>
                        <Image style={styles.avt} source={{uri: data.avatar}}/>
                        </View>
                        <Text style={styles.nameUser}>{data.name}</Text>
                        <Text style={styles.IDUser}>ID: {data.id}</Text>
                    </View>
                    <View>
                        <View style={styles.borderTK}>
                            <Text style={styles.textTK}>Tài khoản</Text>
                        </View>
                        <View>
                            <View style={styles.form__input}>
                                <Text>Tên</Text>
                                <TextInput style={styles.input} value={data.name} keyboardType="default"/>
                            </View> 
                            <View style={styles.form__input}>
                                <Text>Email</Text>
                                <TextInput style={styles.input} placeholder={data.email} keyboardType="email-address" editable={false} selectTextOnFocus={false}/>
                            </View>    
                            <View style={styles.form__input}>
                                <Text>Số điện thoại</Text>
                                <TextInput style={styles.input} placeholder={data.phone} keyboardType="default" editable={false} selectTextOnFocus={false}/>
                            </View> 
                            <View style={styles.form__input}>
                                <Text>Quốc gia</Text>
                                <TextInput style={styles.input} value={data.country} keyboardType="default"/>
                            </View>     
                            <View style={styles.form__input}>
                                <Text>Ngày sinh</Text>
                                <TextInput style={styles.input} value={data.birthday} keyboardType="default"/>
                            </View>  
                            <View style={styles.form__input}>
                                <Text>Trình độ</Text>
                                <TextInput style={styles.input} value={data.level} keyboardType="default"/>
                            </View>  
                            <View style={styles.form__input}>
                                <Text>Muốn học</Text>
                                <TextInput style={styles.input} value="Conversational English" keyboardType="default"/>
                            </View>          
                        </View>
                    </View>
                        
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btntext}>Lưu thay đổi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomScreen}>
                </View>
            </ScrollView>
        
        </View>
    )
}

const styles= StyleSheet.create({
   
    body:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        borderTopColor: '#286AD5',
        borderTopWidth: 6,
        borderRadius: 4,
        // marginBottom: 50,
        borderWidth: 1,
        borderColor: '#F5F6FA'
        // backgroundColor: 'red'
    },
    avt:{
        marginTop: 50,
        marginBottom: 10,
        height: 130,
        width: 130,
        borderRadius: 65,
        borderColor: '#e8e8e8',
        borderWidth: 2,
        
    },
    headInf:{
        height: 300,
        // backgroundColor: "red",
        alignItems: "center"
    },
    nameUser:{
        fontSize: 28,
        fontWeight: "600"
    },
    IDUser:{
        color:'#777'
    },
    borderTK:{
        height: 46,
        backgroundColor: '#F5F6FA',
        justifyContent: "center"

    },
    textTK:{
        marginLeft: 8
    },
    input:{
        marginTop:4,
        marginBottom:12 ,
        height: 48,
        borderWidth: 0.5,
        borderRadius: 5,
        paddingLeft: 20
    },
    form__input:{
        marginLeft: 20,
        marginRight: 20
    },
    btn:{
        width: 120,
        height: 40,
        backgroundColor: '#286AD5',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    btntext:{
        color: '#fff'
    },
    bottom:{
        marginBottom: 40,
        alignItems: 'flex-end',
        marginRight: 20
    },
    bottomScreen:{
        height: 200
    }
})