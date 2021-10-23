import React from "react";
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native'
import Header from "../../Component/Header";
import { AntDesign } from '@expo/vector-icons';
import Course from "../../Component/Course";
import { TouchableOpacity } from "react-native";
// import NewBasicConversation from '../../assets/Course_NewBasicConversation.png'

export default function CourseDetail(){
    return(
        <View>
            <Header/>
            <View >
                <ScrollView>
                    <View style={styles.container}>
                       <Course/>
                       <TouchableOpacity style={styles.btnAction}>
                            <Text style={styles.btnText}>Khám phá</Text>
                       </TouchableOpacity>
                        <View>
                            <View>
                                <View>
                                    <Text style={styles.OverViewtitle}>Tổng quan</Text>
                                </View>
                                <View>
                                    <View style={styles.overViewDetail}>
                                        <AntDesign name="questioncircleo" size={20} color="red" />
                                        <Text style={styles.subTitle}>Tại sao bạn nên học khóa học này</Text>
                                    </View>
                                    <Text style={styles.description}>
                                    It can be intimidating to speak with a foreigner, no matter how much grammar and vocabulary you've mastered. If you have basic knowledge of English but have not spent much time speaking, this course will help you ease into your first English conversations.
                                    </Text>
                                </View>
                                <View>
                                    <View style={styles.overViewDetail}>
                                        <AntDesign name="questioncircleo" size={20} color="red" />
                                        <Text style={styles.subTitle}>Bạn có thể làm gì</Text>
                                    </View>
                                    <Text style={styles.description}>
                                    This course covers vocabulary at the CEFR A2 level. You will build confidence while learning to speak about a variety of common, everyday topics. In addition, you will build implicit grammar knowledge as your tutor models correct answers and corrects your mistakes.
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text style={styles.OverViewtitle}>Trình độ yêu cầu</Text>
                                </View>
                                <View style={styles.overViewDetail}>
                                    <AntDesign name="addusergroup" size={20} color="blue" />
                                    <Text style={styles.subTitle}>Beginner</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text style={styles.Timetitle}>Thời lượng khóa học</Text>
                                </View>
                                <View style={styles.overViewDetail}>
                                    <AntDesign name="book" size={20} color="blue" />
                                    <Text style={styles.subTitle}>10 chủ đề</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text style={styles.Timetitle}> Danh sách chủ đề</Text>
                                </View>
                                <View>
                                    <Text style={styles.detailTopic}>1. Foods You Love</Text>
                                    <Text style={styles.detailTopic}>2. Foods You Love</Text>
                                    <Text style={styles.detailTopic}>3. Foods You Love</Text>
                                    <Text style={styles.detailTopic}>4. Foods You Love</Text>
                                    <Text style={styles.detailTopic}>5. Foods You Love</Text>
                                    <Text style={styles.detailTopic}>6. Foods You Love</Text>
                                    <Text style={styles.detailTopic}>7. Foods You Love</Text>
                                    <Text style={styles.detailTopic}>8. Foods You Love</Text>
                                    <Text style={styles.detailTopic}>9. Foods You Love</Text>
                                    <Text style={styles.detailTopic}>10. Foods You Love</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomScreen}>
                    </View>
                </ScrollView>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        marginBottom: 100
    },
   
    OverViewtitle:{
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 30,
        marginBottom: 12
    },
    overViewDetail:{
        flexDirection:"row",
        alignItems: "center",
       
    },
    subTitle:{
        fontSize: 16,
        marginLeft: 10,
        fontWeight: "600"
    },
    description:{
        marginLeft: 40,
        marginBottom: 12,
        fontWeight: "400"
    },
    bottomScreen:{
        height: 200
    },
    Timetitle:{
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 30,
        marginBottom: 12,
        marginTop: 20
    },
    detailTopic:{
        marginLeft: 4,
        fontWeight: "700",
        opacity: 0.5,
        marginBottom: 4
    },
    btnAction:{
       
        backgroundColor: '#0071F0',
        marginHorizontal: 30,
      
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: -20,
        marginBottom: 20,
   
        fontWeight: '700'
    },
    btnText:{
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    }
})