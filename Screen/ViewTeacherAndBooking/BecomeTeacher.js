import React, {useState} from "react";
import {View, Text, Image, StyleSheet, TextInput, ScrollView} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox';
import Header from "../../Component/Header";
import Avt from '../../assets/avt.jpg'

const CheckBoxMajors = (props)=>{

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return(
      <View>
            <View>
            <CheckBox
            disabled={false}
            value={toggleCheckBox.value}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
        </View>
      </View>
    )
}
export default function BecomeTeacher(){
    const radio_props = [
        {label: 'Người mới bắt đầu  ', value: 0 },
        {label: 'Trung cấp  ', value: 1 },
        {label: 'Trình độ cao  ', value: 2 }
      ];
    return(
        <View>
            <Header/>
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.stepItemContainer}>
                    <Text style={styles.stepItemActive}>1</Text>
                    <Text style={styles.stepItemTitle}>Hoàn thành hồ sơ</Text>
                </View>
                <View style={styles.introContent}>
                    <Text style={styles.introContentHeader}>Thiết lập hồ sơ gia sư của bạn</Text>
                    <Text style={styles.introContentBody}>Hồ sơ gia sư của bạn là cơ hội tiếp cận với học viên trên Tutoring. Bạn có thể sửa lại sau tại trang hồ sơ cá nhân.</Text>
                    <Text style={styles.introContentBody}>
                    Học viên mới có thể duyệt qua hồ sơ gia sư để tìm một gia sư phù hợp với mục tiêu học tập và tính cách của họ. Khi một học viên quay trở lại họ có thể tìm từ hồ sơ của gia sư người mà sẵn sàng cho họ những trải nghiệm tuyệt vời.
                    </Text>
                </View>
                <Text style={styles.infotitle}>Thông tin cơ bản</Text>
                <View style={styles.info}>
                    <Image style={styles.avt} source={Avt}/>
                    <View style={styles.infodetail}>
                        <Text>Tên gia sư</Text>
                        <TextInput style={styles.input} placeholder="Nhập tên" keyboardType="default"/>
                        <Text>Đến từ</Text>
                        <TextInput style={styles.input} placeholder="Quốc gia" keyboardType="default"/>
                        <Text>Ngày sinh</Text>
                        <TextInput style={styles.input} placeholder="dd/mm/yyyy" keyboardType="default"/>
                    </View>
                </View>
                <Text style={styles.infotitle} >CV</Text>
                <Text>Học viên sẽ xem thông tin từ hồ sơ của bạn để quyết định nếu bạn phù hợp với nhu cầu của họ.</Text>
                <Text style={styles.noti}>Để bảo mật quyền riêng tư của bạn, vui lòng không chia sẻ bất cứ thông tin các nhân như email, số điện thoại, skype,... Trong hồ sơ của bạn.</Text>
                <Text style={{marginVertical: 10}}>Sở thích</Text>
                <TextInput style={styles.input} multiline={true} placeholder="Nhập những điều thú vị, sở thích" keyboardType="default"/>
                <Text style={{marginVertical: 10}}>Học vấn</Text>
                <TextInput style={styles.input} multiline={true} placeholder="Ví dụ: Bằng cấp, chứng chỉ.." keyboardType="default"/>
                <Text style={{marginVertical: 10}}>Kinh nghiệm</Text>
                <TextInput style={styles.input} multiline={true}  keyboardType="default"/>
                <Text style={{marginVertical: 10}}>Nghề nghiệp trước đây và hiện tại</Text>
                <TextInput style={styles.input} multiline={true} keyboardType="default"/>

                <Text style={styles.infotitle} >Về ngôn ngữ</Text>
                <Text style={{marginVertical: 10}}>Ngôn ngữ</Text>
                <TextInput style={styles.input} multiline={true} placeholder="Ví dụ: Tiếng Anh, tiếng Việt, tiếng Hàn" keyboardType="default"/>

                <Text style={styles.infotitle} >Về việc dạy</Text>
                <Text style={styles.noti}>Đây là điều đầu tiên mà học viên nhìn thấy khi tìm kiếm gia sư.</Text>
                <Text style={{marginVertical: 10}}>Giới thiệu</Text>
                <TextInput style={styles.input} multiline={true} placeholder="Ví dụ: Tôi là bác sĩ, năm nay 35 tuổi và có thể giúp bạn thực hành tiếng Anh thương mại và y tế. Tôi cũng thích dạy cho người mới bắt đầu vì có tính kiên nhẫn và luôn nói chậm, rõ ràng. " keyboardType="default"/>
                <View >
                    <Text style={{marginVertical: 10}}>Tôi giỏi nhất trong việc dạy những học viên</Text>
                    <RadioForm style={styles.radiobutton}
                        buttonColor={'#999'}
                        selectedButtonColor ={'#0071F0'}
                        buttonSize = {12}
                   
                        radio_props={radio_props}
                        initial={false}
                        onPress={(value) => {}}/>
                </View>
                <View>
                    {<CheckBoxMajors/>}
                </View>
            </View>
            <View style={{height: 200}}></View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    stepItemActive:{
        width: 32,
        height: 32,
        textAlign:'center',
        lineHeight: 32,
        fontSize: 16,
        borderRadius: 50,
        backgroundColor: '#0071F0',
        color: '#fff',
        margin: 10
    },
    stepItem:{
        width: 32,
        height: 32,
        textAlign:'center',
        lineHeight: 32,
        fontSize: 16,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: '#777',
        color: '#777',
        margin: 10

    },
    stepItemTitle:{
        fontSize: 18,
        margin: 10

    },
    stepItemContainer:{
        flexDirection:'row',
        alignItems: "center"
    },
    introContentHeader:{
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    introContentBody:{
        marginBottom: 10,
        lineHeight: 20,
        color: '#333'
    },
    container:{
        marginHorizontal: 10
    },
    infotitle:{
        fontSize: 18,
        fontWeight:'bold',
        marginBottom: 10
    },
    avt:{
        height: 100,
        width: 100,
        flex: 1,
    },
    info:{
        flexDirection:'row',
        alignItems: "center"
    },
    infodetail: {
        marginLeft: 10,
        flex: 3
    },
    input:{
        marginTop:4,
        marginBottom:12 ,
        // height: lineHeight,
        borderWidth: 0.5,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%'
    },
    noti:{
        backgroundColor: '#E6F7FF',
        padding: 10,
        borderWidth: 1,
        borderColor: '#88C0F8',
        marginTop: 10
    },
    radiobutton:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:  "center"
    }


})