import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import StopWatch from '../components/StopWatch';


export default class SWScreen extends React.Component {

    render() {
      return(
      <View style={styles.container}>
      <StopWatch></StopWatch>
      <StopWatch></StopWatch>
      <StopWatch></StopWatch>
      <StopWatch></StopWatch>
      </View>
      );
      }
} 

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "red",
    flexDirection: 'column',
    flexWrap: 'wrap',
  }
})