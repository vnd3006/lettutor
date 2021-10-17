import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, SafeAreaViewComponent } from 'react-native';
import LogIn from './Screen/Authentication/LogIn';
import Register from './Screen/Authentication/Register';
import ForgetPassword from './Screen/Authentication/ForgetPassword';
import CourseDetail from './Screen/Course/CourseDetail';
import ListCourses from './Screen/Course/ListCourses';
import Profile from './Screen/AccountManagement/Profile';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ListCourses/>
        {/* <CourseDetail/> */}
        {/* <Profile/> */}
      {/* <ForgetPassword/> */}
      {/* <Register/> */}
      {/* <LogIn/> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:24
  },
});
