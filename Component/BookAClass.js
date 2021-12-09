import React from "react";
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Touchable, TouchableOpacityBase} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const RenderBookActive = ()=>(
    <TouchableOpacity style={{backgroundColor:'#0071F0', borderRadius: 50, borderColor: '#fafafa', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6}}>
        <Text style={{color: '#fff'}}>
            Đặt lịch
        </Text>
    </TouchableOpacity>
)

const RenderBookNonActive = ()=>(
    <View style={{backgroundColor:'#f5f5f5', borderRadius: 50, paddingHorizontal: 10, paddingVertical: 6}}>
        <Text style={{color: '#CDCDCD'}}>
            Đặt lịch
        </Text>
    </View>
)
const RenderBooked = ()=>(
    <Text style={{textAlign:'center'}}>Đã được đặt</Text>
)
const RenderTime= (props)=>(
    <View style={styles.cellHour}>
        <Text>{props.time}</Text>
    </View>
)
const RenderDate= (props)=>(
    <View style={styles.cellDate}>
        <Text>{props.date}</Text>
        <Text>{props.thu}</Text>
    </View>
)
export default function BookingAClass(){
    return(
        <View style={{margin: 10}}>
            <View style={styles.calendar}>
                <TouchableOpacity>
                    <Text style={styles.btnToday}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnControl}>
                    <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnControl}>
                    <AntDesign name="right" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.date}> T10, 2021</Text>
            </View>
                <View style={styles.row}>
                        <View style={styles.col}>
                            <View style={{height:60, width: 105, backgroundColor:'#f9f9f9'}}></View>
                            {<RenderTime time={'06:00-06:25'}/>}
                            {<RenderTime time={'07:00-07:25'}/>}
                            {<RenderTime time={'08:00-08:25'}/>}
                            {<RenderTime time={'09:00-09:25'}/>}
                            {<RenderTime time={'10:00-10:25'}/>}
                            {<RenderTime time={'11:00-11:25'}/>}
                            {<RenderTime time={'12:00-12:25'}/>}
                            {<RenderTime time={'06:00-06:25'}/>}
                            {<RenderTime time={'07:00-07:25'}/>}
                            {<RenderTime time={'08:00-08:25'}/>}
                            {<RenderTime time={'09:00-09:25'}/>}
                            {<RenderTime time={'10:00-10:25'}/>}
                            {<RenderTime time={'11:00-11:25'}/>}
                            {<RenderTime time={'12:00-12:25'}/>}
                        </View>
                <ScrollView horizontal={true}>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            {<RenderDate date={'23/10'} thu={'T7'}/>}
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                        </View>  
                        <View style={styles.col}>
                            {<RenderDate date={'24/10'} thu={'CN'}/>}
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                        </View>  
                        <View style={styles.col}>
                            {<RenderDate date={'25/10'} thu={'T2'}/>}
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBooked/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                        </View>  
                        <View style={styles.col}>
                            {<RenderDate date={'26/10'} thu={'T3'}/>}
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBooked/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBooked/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBooked/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                        </View>  
                        <View style={styles.col}>
                            {<RenderDate date={'27/10'} thu={'T4'}/>}
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                        </View>  
                        <View style={styles.col}>
                            {<RenderDate date={'28/10'} thu={'T5'}/>}
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                        </View>  
                        <View style={styles.col}>
                            {<RenderDate date={'39/10'} thu={'T6'}/>}
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}>{<RenderBookNonActive/>}</View>
                            <View style={styles.cellEmpry}></View>
                            <View style={styles.cellEmpry}></View>
                        </View>                       
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
   btnToday:{
       backgroundColor:'#0071F0',
       color: '#fff',
       fontSize: 18,
       width: 80,
       height: 40,
       textAlign: 'center',
       borderRadius: 5,
       lineHeight: 40,
       marginRight: 12
   },
   btnControl:{
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0',
    justifyContent:"center",
    alignItems: 'center',
    borderRadius: 2
   },
   calendar:{
       flexDirection: 'row',
       alignItems: 'center',
       marginVertical:20
   },
   date:{
       fontSize: 20,
       marginLeft: 16
   },
   cellHour:{
       width: 105,
       height: 45,
       backgroundColor: '#f9f9f9',
       alignItems:'center',
       justifyContent:'center',
       borderWidth: 0.5,
       borderColor: '#f0f0f0'
   },
   cellDate:{
    width: 70,
    height: 60,
    // backgroundColor: '#f9f9f9',
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 0.5,
    borderColor: '#f0f0f0'
   },
   row:{
       flexDirection:'row'
   },
   col:{
       flexDirection:'column'
   },
   cellEmpry:{
       width: 70,
       height: 45,
       borderWidth: 0.5,
       borderColor: '#f0f0f0',
       alignItems:'center',
       justifyContent: 'center'
   }
})