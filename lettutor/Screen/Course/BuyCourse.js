import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Header from "../../Component/Header";
export default function BuyCourse(){
    return(
        <View>
            <Header/>
            <ScrollView style={styles.body}> 
                <View >
                    <View style={styles.container}>
                        <Text style={styles.psHeader}>Mua khóa học</Text>
                        <Text style={styles.psDesc}>Chọn khoá học phù hợp nhất và bắt đầu cải thiện tiếng Anh của bạn ngay hôm nay!</Text>
                        <Text style={{fontSize: 16}}>Đặt lịch hàng tuần</Text>
                        <View>
                            <TouchableOpacity style={styles.selectsection}>
                                <Text style={styles.selectsectionItem}>1 buổi học mỗi ngày</Text>
                                <AntDesign style={styles.selecticon} name="down" size={20} color="#fff" />
                            </TouchableOpacity>
                            <View style={styles.seclectoption}>
                                <View style={styles.displayoption}>
                                    <Text style={styles.optionActive}>1 buổi học mỗi ngày</Text>
                                    <Text style={styles.option}>2 buổi học mỗi ngày</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{marginTop: 4, color: '#F3B046', fontSize: 16}}>Mỗi buổi học 25 phút</Text>
                        <View>
                            <TouchableOpacity style={styles.selectsection}>
                                <Text style={styles.selectsectionItem}>3 ngày mỗi tuần</Text>
                                <AntDesign style={styles.selecticon} name="down" size={20} color="#fff" />
                            </TouchableOpacity>
                            <View style={styles.seclectoption}>
                                <View style={styles.displayoption}>
                                    <Text style={styles.optionActive}>2 ngày mỗi tuần</Text>
                                    <Text style={styles.option}>3 ngày mỗi tuần</Text>
                                    <Text style={styles.option}>5 ngày mỗi tuần</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{marginVertical: 10, fontSize: 16}}>Thời gian khóa học</Text>
                        <View style={styles.commitmnent}>
                            <TouchableOpacity style={styles.commitmentoptionActive}>
                                <Text style={styles.textActive}>1 tháng</Text>
                                <Text>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.commitmentoption}>
                                <Text style={styles.textNonActive}>3 tháng</Text>
                                <Text>10% off</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.commitmentoption}>
                                <Text style={styles.textNonActive}>12 tháng</Text>
                                <Text>25% off</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{marginVertical: 10, fontSize: 16}}>Mã khuyến mãi</Text>
                        <View style={styles.discount}>
                            <TextInput style={styles.input} keyboardType="default"/>
                            <Text style={styles.btn}>Áp dụng</Text>
                        </View>
                        <Text style={styles.offer}>Giảm thêm 25% cho các khoá học trong tháng 10</Text>
                        <View>
                            <View style={styles.totalcost}>
                                <Text style={styles.costafter}>900.000đ</Text>
                                <Text style={styles.costbefore}>1.200.000đ</Text>
                            </View>
                            <View style={styles.itemdiscount}>
                                <Text style={styles.totaldiscount}>25% off</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                          <Text style={styles.payment}>Thanh toán</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 200}}></View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        marginHorizontal: 10,
        backgroundColor: '#fafafa',
        // marginVertical: 30,
        borderRadius: 15
    },
    container:{
      margin: 16
    },
    psHeader:{
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 15
    },
    psDesc:{
        color: '#777',
        fontSize: 17,
        textAlign: "center",
        paddingHorizontal: 20,
        marginBottom: 16
    },
    selectsection:{
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#0071F0',
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: "center",
        marginBottom: 4,
        marginTop: 12,
        position: 'relative',
    },
    selectsectionItem:{
        fontSize: 20,
        color: '#fff',
        flex: 8,
        textAlign: "center",
        fontWeight: '700',
      
    },
    selecticon:{
        flex: 1
    },
    seclectoption:{
        position:'absolute',
        width: '100%',
        zIndex: 1
    },
    displayoption:{
        backgroundColor: '#fff',
        paddingVertical: 4,
        borderRadius: 6,
        right:0,
        top: 72,
        display: "none"
    },
    optionActive:{
        paddingLeft: 12,
        fontWeight: '700',
        backgroundColor: '#E6F7FF',
        paddingVertical: 8
    },
    textActive:{
        fontSize: 18,
        fontWeight: '700',
        color: '#fff'
    },
    textNonActive:{
        fontWeight: '700',
        fontSize: 18
    },
    option:{
        paddingLeft: 12,
        paddingVertical: 8
    },
    commitmnent:{
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10
    },
    commitmentoption:{
        alignItems: "center",
        borderRadius: 10,
        padding: 12,
        flex: 1,
        marginHorizontal: 1
    },
    commitmentoptionActive:{
        alignItems: "center",
        
        borderRadius: 10,
        padding: 12,
        flex: 1,
        marginHorizontal: 1,
        backgroundColor: '#0071F0',
    },
    input:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#a0a0a0',
        borderRadius: 10,
        height: 40,
        flex: 4,
        paddingLeft: 10,
        color: '#000'
        // lineHeight:16   
     },
    btn: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        padding: 10,
        textAlign: 'center',
        color: '#999',
        flex: 1,
        marginLeft: 10
    },
    discount:{
        flexDirection: 'row'
    },
    offer:{
        fontWeight: '700',
        fontSize: 26,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#FC6B10',
        paddingTop: 10,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0'
    },
    totalcost:{
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 10,
        position: 'relative'
    },
    costafter:{
        fontSize: 20,
        fontWeight: '700',
        color: '#0071F0'
    },
    costbefore:{
        textDecorationLine: 'line-through'
    },
    totaldiscount:{
        backgroundColor: '#FC6B10',
        fontSize: 18,
        fontWeight: '700',
        width: 88,
        textAlign: 'center',
        borderRadius: 50,
        color: '#fff',
        padding: 2
    },
    itemdiscount:{
        position: 'absolute',
        top: -10,
        right: 0
    },
    payment:{
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: '#17DEA1',
        borderRadius: 10,
        color: '#fff',
        marginTop: 12
    }

})