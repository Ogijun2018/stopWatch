import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const {height, width} = Dimensions.get('window');

export default class StopWatch extends React.Component {
    _renderTimers() {
      return(
        <View style={styles.timerWrapper}>
          <Text>00:00.95</Text>
          <Text>00:02.95</Text>
        </View>
      );
    }

    _rednerButtons(){
      return(
        <View style={styles.buttonWrapper}>
          <Text>Lap</Text>
          <Text>Start</Text>
        </View>
      );
    }

    render(){
        return(
        <View style={styles.container}>
          <View style={styles.top}>
            {this._renderTimers()}
          </View>
          <View style={styles.bottom}>
            {this._rednerButtons()}
          </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  timerWrapper: {
    backgroundColor: '#FFFFFF',
  },
  top: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
});