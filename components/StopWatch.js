import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

export default class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          timerStart: false,
          stopwatchStart: false,
          totalDuration: 90000,
          timerReset: false,
          stopwatchReset: false,
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
      }


    toggleTimer() {
        this.setState({timerStart: !this.state.timerStart, timerReset: false});
      }
     
      resetTimer() {
        this.setState({timerStart: false, timerReset: true});
      }
     
      toggleStopwatch() {
        this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
      }
     
      resetStopwatch() {
        this.setState({stopwatchStart: false, stopwatchReset: true});
      }

      getFormattedTime(time) {
        this.currentTime = time;
    };

    render(){
        return(
        <View>
            <Stopwatch 
            msecs start={this.state.stopwatchStart}
            reset={this.state.stopwatchReset}
            options={this.options}
            getTime={this.getFormattedTime} />
          <TouchableOpacity onPress={this.toggleStopwatch}>
            <Text style={{fontSize: 30}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.resetStopwatch}>
            <Text style={{fontSize: 30}}>Reset</Text>
          </TouchableOpacity>
        </View>
        );
    }

    options = {
        container: {
          backgroundColor: '#000',
          padding: 5,
          borderRadius: 5,
          width: 220,
        },
        text: {
          fontSize: 30,
          color: '#FFF',
          marginLeft: 7,
        }
      };
}