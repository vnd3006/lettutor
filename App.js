import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, SafeAreaViewComponent } from 'react-native';
import LogIn from './Screen/Authentication/LogIn';
import Register from './Screen/Authentication/Register';
import ForgetPassword from './Screen/Authentication/ForgetPassword';
import CourseDetail from './Screen/Course/CourseDetail';
import ListCourses from './Screen/Course/ListCourses';
import Profile from './Screen/AccountManagement/Profile';
// import HeaderBookingNoClass from './Component/HeaderBookingNoClass';
import HeaderBookingClass from './Component/HeaderBookingClass';
import TagItem from './Component/TagItem';
import TeacherBooking from './Screen/ViewTeacherAndBooking/TeacherBooking';
import Teacher from './Component/Teacher';
import TagItemNoActive from './Component/TagItemNoActive';
import TeacherDetail from './Screen/ViewTeacherAndBooking/TeacherDetail';
import BecomeTeacher from './Screen/ViewTeacherAndBooking/BecomeTeacher';
import Schedule from './Screen/Schedule/Schedule';
import ScheduleItemHistory from './Component/ScheduleItemHistory';

import ScheduleHistory from './Screen/Schedule/ScheduleHistory';
import EmptySchedule from './Component/EmptySchedule';
import ScheduleItem from './Component/ScheduleItem';
import BuyCourse from './Screen/Course/BuyCourse';
import Curriculum from './Screen/Course/Curriculum';
import BookingAClass from './Component/BookAClass';
import Video from './Screen/Video/Video';
import Menu from './Component/Menu';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ApiProvider from './context/APIcontext';

const MainNavigatorStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SettingStack = createNativeStackNavigator()

const CourseStack = createNativeStackNavigator()

const Setting = () =>{
    return <SettingStack.Navigator initialRouteName='Menu' screenOptions={{headerShown : false}}>
        <SettingStack.Screen name='Menu' component={Menu}/>
        <SettingStack.Screen name='Profile' component={Profile}/>
        <SettingStack.Screen name='ScheduleHistory' component={ScheduleHistory}/>
    </SettingStack.Navigator>
}

const Courses = () =>{
    return <CourseStack.Navigator screenOptions={{headerShown : false}}>
        <CourseStack.Screen name='ListCourses' component={ListCourses} />
        <CourseStack.Screen name='CourseDetail' component={CourseDetail}/>
    </CourseStack.Navigator>
}

const HomePage = ()=>{
  return <CourseStack.Navigator screenOptions={{headerShown : false}}>
    <CourseStack.Screen name='TeacherBooking' component={TeacherBooking} />
    <CourseStack.Screen name='TeacherDetail' component={TeacherDetail}/>
  </CourseStack.Navigator>
}
const HomeNavigator = ()=>{
    return <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name ==='Schedule'){
              iconName = focused? 'calendar' : 'calendar-outline'
          } else if ( route.name ==='Course'){
              iconName = focused?'book' :'book-outline'
          } else if(route.name === 'Buy Course'){
              iconName = focused? 'cart':'cart-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false
        // tabBarActiveTintColor: 'tomato',
        // tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name='Home' component={HomePage}/>
        <Tab.Screen name = 'Course' component={Courses}/>
        <Tab.Screen name ='Schedule' component={Schedule}/>
        <Tab.Screen name='Buy Course' component={BuyCourse}/>
        <Tab.Screen name = 'Settings' component={Setting}/>
    </Tab.Navigator>
}


const MainNavigator = ()=>{
    return <MainNavigatorStack.Navigator  screenOptions={{
            headerShown: false
        }}>
        <MainNavigatorStack.Screen  name="LogIn" component={LogIn} />
        <MainNavigatorStack.Screen name="Register" component={Register}/>
        <MainNavigatorStack.Screen name='ForgetPassword' component={ForgetPassword}/>
        <MainNavigatorStack.Screen name='HomeNavigator' component={HomeNavigator}/>
    </MainNavigatorStack.Navigator>

}
const Tabs = createBottomTabNavigator();


export default function App() {
  return (
        <NavigationContainer style={styles.container}>
            <ApiProvider>
                <MainNavigator/>    
            </ApiProvider>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:24,
  },
});
