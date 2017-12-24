import React from 'react';
import {  View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Links from '../components/Links'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  async componentDidMount(){
    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(res => res.json()
  .then(data => this.setState({data: data})))
  }


  render() {
    const resizeMode = 'cover';
    const text = 'This is some text inlaid in an <Image />';

    return (
       <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          opacity: 0.7
        }}
        source={require('../assets/images/tracks.jpg')}
      >
      
      <Header />     
      <MainContent data ={this.state.data} />
      <Links />
      </ImageBackground>  
      
  

  
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:  'transparent'
  },
})



