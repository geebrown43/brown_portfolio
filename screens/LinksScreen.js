import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Parallax from '../components/Parallax'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Portfolio',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Parallax />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'transparent',
  },
});
