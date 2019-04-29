import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, TouchableOpacity } from 'react-native';
import { Timer } from  "react-native-stopwatch-timer";

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
              <View style={styles.timer}>
            <TouchableOpacity
              onPress={this.resetTimer}
              style={[styles.button, {backgroundColor: '#3D3D3D'}]}
            >
            <View style={styles.buttonBorder}>
            <Text style={styles.buttonTitle}>Reset</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.toggleTimer}
              style={[styles.button, {backgroundColor: '#1B361F'}]}
            >
            <View style={styles.buttonBorder}>
            <Text style={styles.buttonTitle}>Start Stop</Text>
            </View>
            </TouchableOpacity>
            </View>
          </View>
        );
    }
}

const handleTimerComplete = () => alert("custom completion function");
 
const styles = StyleSheet.create({
    container: {
        width: width / 2,
        height: height / 5,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#D3D3D3',
        borderRadius: 20,
        backgroundColor: '#FFF0F5',
      },
      button: {
          flexDirection: 'row',
          justifyContent: 'space-between',
      },
      startStop: {
        fontSize: 30,
        width: 60, 
        height: 60, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 60,
      },
      timer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        margin: 5,
        backgroundColor: '#FFF0F5',
      },
      button: {
        width: 60,
        height: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonBorder: {
        width: 60,
        height: 60,
        borderRadius: 38,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonTitle: {
        fontSize: 15,
        color: 'white',
      },
});

const options = {
    text: {
        fontSize: 38,
        color: 'black',
      },
}