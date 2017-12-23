import React from 'react'
import { View, Text, StyleSheet } from "react-native";




export default class Header extends React.Component {
    render(){
        return (
            <View>
                <Text style={styles.head}>Gavin Portfolio</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    head:{
        paddingTop: 10,
        fontSize: 48,
        color: 'red',
        fontFamily: 'lobster'
    }
})