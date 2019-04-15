import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { Timer } from "react-native-stopwatch-timer";


const {height, width} = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStart: false,
            totalDuration: this.props.duration,
            timerReset: false,
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    toggleTimer() {
        this.setState({timerStart: !this.state.timerStart, timerReset: false});
    }

    resetTimer() {
        this.setState({timerStart: false, timerReset: true});
    }
      
    getFormattedTime(time) {
        this.currentTime = time;
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold',}}>Timer</Text>
            <Timer totalDuration={this.state.totalDuration} start={this.state.timerStart}
              reset={this.state.timerReset}
              options={options}
              handleFinish={handleTimerComplete}
              getTime={this.getFormattedTime} />
              <View style={styles.button}>
            <TouchableHighlight onPress={this.toggleTimer}>
              <Text style={styles.startStop}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.resetTimer}>
              <Text style={{fontSize: 30}}>Reset</Text>
            </TouchableHighlight>
            </View>
          </View>
        );
    }
}

const handleTimerComplete = () => alert("custom completion function");
 
const styles = StyleSheet.create({
    container: {
        width: width / 2,
        height: height / 2 - 30,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#D3D3D3',
        borderRadius: 20,
      },
      button: {
          flexDirection: 'row',
          justifyContent: 'space-between',
      },
      startStop: {
        fontSize: 30,
        backgroundColor: 'red', 
        width: 60, 
        height: 60, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 60,
      }
});

const options = {
    container: {
        backgroundColor: 'white',
      },
    text: {
        fontSize: 38,
        color: 'black',
      },
}