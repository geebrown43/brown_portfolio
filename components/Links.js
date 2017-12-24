import React from 'react'
import {View, Text, Linking, StyleSheet} from 'react-native'
import {SocialIcon} from 'react-native-elements'
import { Constants, WebBrowser } from 'expo';


export default class SocialLinks extends React.Component{
    state ={
        result: null
    }
    
    render(){
        return (
            <View style ={styles.container}>
            <SocialIcon
                title='LinkedIn'
                button
                type='linkedin'
                onPress ={this._handleLinkedInButtonAsync}
                style = {styles.space}/>
            <SocialIcon
                title='GitHub'
                button
                type='github'
                onPress ={this._handleGitHubButtonAsync}
                style={{padding: 10, paddingRight: 25}}/>
            </View>
        )
    }

    _handleGitHubButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://github.com/geebrown43');
        this.setState({ result });
      };

    _handleLinkedInButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.linkedin.com/in/geebrown43/');
        this.setState({ result });
    };
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    space:{
        padding: 10
    }
})