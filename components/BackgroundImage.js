import React from 'react'
import { ImageBackground } from "react-native";




export default class BackImage extends React.Component {
    render(){
        return(
          <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: 0.87
        }}
        source={require('../assets/images/lion.jpg')}
      >

      </ImageBackground>  
        )
    }
}