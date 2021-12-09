import React from "react";
import {View, Text, Image, ScrollView, StyleSheet, FlatList} from 'react-native'
import NewBasicConversation from '../../assets/Course_NewBasicConversation.png'
import Header from "../../Component/Header";

const DATA = [
    {
      id: '1',
      title: '1. Foods You Love',
    },
    {
        id: '2',
        title: '2. Your Job',
      },
      {
        id: '3',
        title: '3. Play and Watching Sports',
      },
      {
        id: '4',
        title: '4. The Best Pet',
      },
      {
        id: '5',
        title: '5. Having Fun in Your Free Time',
      },
      {
        id: '6',
        title: '6. Your Daily Routine',
      },
      {
          id: '7',
          title: '7. Childhood Memories',
        },
        {
          id: '8',
          title: '8. Your Family Members',
        },
        {
          id: '9',
          title: '9. Your Hometown',
        },
        {
          id: '10',
          title: '10. Shopping Habits',
        },

  ];
const Item = ({title})=>(
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)
export default function Curriculum(){
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return(
        <View>
            <Header/>
            <View >
                <ScrollView style={styles.body}>
                    <View style={styles.headerCourse}>
                        <Image style={styles.courseImg} source={NewBasicConversation}/>
                        <View style={styles.topic}>
                            <View>
                                <Text style={styles.topicHeader}>New Basic Conversation Topic</Text>
                            </View>
                            <View>
                                <Text style={styles.topicDescript}>Gain confidence speaking about familiar topics</Text>
                            </View>
                            <Text style={styles.ListtopicHeader}>Danh sách chủ đề</Text>
                            <View>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                            </View>
                        </View>
                    </View>
                    <View style={{height:300}}></View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        marginHorizontal: 10,
        paddingTop: 30
    },
    headerCourse:{
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 0.5,
        marginBottom: 40
    },
    courseImg:{
        width: "100%",
        height: 240,
        borderRadius: 8
    },
    topic:{
        margin: 30
    },
    topicHeader:{
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 10
    },
    topicDescript:{
        fontWeight: "700",
        color: '#333'
    },
    ListtopicHeader:{
        fontSize: 24,
        fontWeight: "700",
        marginVertical: 24
    },
    item:{
        // backgroundColor: '#EBEBEB',
        borderRadius: 10 
    },
    title:{
        fontSize: 18,
        fontWeight: '600',
        paddingVertical: 10,
        paddingLeft: 20,
    }
})