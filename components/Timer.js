import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Timer } from  'react-native-stopwatch-timer';

const {height, width} = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStart: false,
            totalMinutesDuration: 2,
            totalSecondsDuration: 30,
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

    changeMinutes = inputValue => {
      this.setState({totalMinutesDuration: inputValue });
    }

    changeSeconds = inputValue => {
      this.setState({ totalSecondsDuration: (inputValue)});
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
            <TextInput value={this.state.totalMinutesDuration} onChangeText={this.changeMinutes} style={{width: width / 6, textAlign: 'right'}}
            maxLength={2} keyboardType={'numeric'}
            />
            <Text style={{fontWeight: 'bold'}}>分</Text>
            <TextInput value={this.state.totalSecondsDuration} onChangeText={this.changeSeconds} style={{width: width / 6, textAlign: 'right'}}
            maxLength={2} keyboardType={'numeric'}
            />
            <Text style={{fontWeight: 'bold'}}>秒</Text>
            </View>
            <Timer totalDuration={(parseInt(this.state.totalMinutesDuration) * 60 + parseInt(this.state.totalSecondsDuration)) * 1000} start={this.state.timerStart}
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
            <Text style={styles.buttonTitle}>Set Reset</Text>
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

const handleTimerComplete = () => Alert.alert("Time is come!");
 
const styles = StyleSheet.create({
    container: {
        width: width / 2,
        height: height / 5,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#D3D3D3',
        borderRadius: 20,
        backgroundColor: '#9FD2FC',
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
        backgroundColor: '#9FD2FC',
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