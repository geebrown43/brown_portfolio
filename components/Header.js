import React from 'react'
import { View, Text, StyleSheet } from "react-native";




export default class Header extends React.Component {
    render(){
        return (
            <View>
                <Text style={styles.head}>Gavin Brown</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    head:{
        paddingTop: 30,
        fontSize: 50,
        color: 'black',
        fontFamily: 'great',
        textAlign: 'center',
        backgroundColor:'transparent'
    }
})


