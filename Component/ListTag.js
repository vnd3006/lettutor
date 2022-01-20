import React from "react";
import { FlatList, StyleSheet } from "react-native";
import TagItem from "./TagItem";

export default function ListTag({ tags }) {
    return ( 
        <FlatList data = { tags }
        renderItem = { TagItem }
        keyExtractor = { item => item }
        style={styles.tagItem}/>
    )
}


const styles = StyleSheet.create({
    tagItem:{
        flexDirection: "row",
        flexWrap: 'wrap'
    },
})
