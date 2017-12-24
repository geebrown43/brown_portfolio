import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default class Main extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            data: this.props.data
        } 
        
    }

    render(){
        console.log(this.props.data)
        return (
            <View style={styles.item}>
               <Text style={styles.quote}>
               Humans have a light side and a dark side, and it's up to us to choose which way we're going to live our lives. Even if you start out on the dark side, it doesn't mean you have to continue your journey that way. You always have time to turn it around.
               </Text>
               <Text style={styles.body}> ~Taraji P. Henson</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    body: {
        fontSize: 24,
        color: 'black',
        backgroundColor: 'transparent',
        textAlign: 'right',
        fontFamily: 'shadows'
    },
    item: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    quote:{
        marginTop: '7%',
        margin: 30,
        fontSize: 20,
        color:'black',
        textAlign: 'center',
        backgroundColor: 'transparent',
        opacity: 0.8,
        fontFamily: 'shadows'
    }
})