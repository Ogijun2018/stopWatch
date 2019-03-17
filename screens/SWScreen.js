import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, ListView } from "react-native";
import TimeFormatter from 'minutes-seconds-milliseconds';

let laps = [
  { name: 'Lap 1', value: '00.00.01'},
  { name: 'Lap 2', value: '00.00.02'},
  { name: 'Lap 3', value: '00.00.03'},
  { name: 'Lap 4', value: '00.00.04'},
  { name: 'Lap 5', value: '00.00.05'},
];

let ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

export default class SWScreen extends React.Component {
  
  state = {
      dataSource: ds.cloneWithRows(laps),
      isRunning: false,
      mainTimer: null,
      lapTimer: null,
      mainTimerStart: null,
      lapTimerStart: null,
  }

  handleStartStop() {
     let { isRunning, firstTime, mainTimer, lapTimer } = this.state;

    if(isRunning) {
      clearInterval(this.interval);
      this.setState({
        isRunning: false
      });
      return ;
    }

    this.setState({
      mainTimerStart: new Date(),
      lapTimerStart: new Date(),
      isRunning: true
    });

    this.interval = setInterval(() => {
      this.setState({
        mainTimer: new Date() - this.state.mainTimerStart + mainTimer,
        lapTimer: new Date() - this.state.lapTimerStart + lapTimer,
      });
    }, 30);
  }

  _renderTimers() {
    return(
      <View style={styles.timerWrapper}>
        <View style={styles.timerWrapperInner}>
          <Text style={styles.lapTimer}>{ TimeFormatter(this.state.lapTimer) }</Text>
          <Text style={styles.mainTimer}>{ TimeFormatter(this.state.mainTimer) }</Text>
        </View>
      </View>
    );
  }

  _renderLaps() {
    return(
      <View style={styles.lapsWrapper}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={ (rowData) => (
            <View style={styles.lapRow}>
              <Text style={styles.lapNumber}>{rowData.name}</Text>
              <Text style={styles.lapTime}>{rowData.value}</Text>
            </View>
          )}
          />
      </View>
    );
  }

  handleLapReset() {
    let {isRunning, mainTimerStart} = this.state;
    if(mainTimerStart && !isRunning) {
      laps: [],
      this.setState({
        mainTimerStart: null,
        lapTimerStart: null,
        mainTimer: 0,
        lapTimer: 0,
      });
    }
  }

  _rednerButtons(){
    return(
      <View style={styles.buttonWrapper}>
        <TouchableHighlight underlayColor='#777' onPress={this.handleLapReset.bind(this)} style={styles.button}>
          <Text>{ (mainTimerStart && !isRunning) ? 'Reset' : 'Lap' }</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#ddd' onPress={this.handleStartStop.bind(this)} style={styles.button}>
          <Text style={[styles.startBtn, isRunning && styles.stopBtn]}>{isRunning? 'Stop' : 'Start'}</Text>
        </TouchableHighlight>
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
        <View>
          {this._renderLaps()}
        </View>
      </View>
      );
  }
} 

  
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  mainTimer: {
    fontSize: 60,
    fontWeight: '100',
    alignSelf: 'flex-end',
  },
  lapTimer: {
    fontSize: 18,
    alignSelf: 'flex-end',
  },
  timerWrapperInner: {
    alignSelf: 'center',
  },
  timerWrapper: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 30,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 1,
  },
  bottom: {
    flex: 2,
    backgroundColor: '#F0EFF5',
  },
  lapRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    paddingTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  lapNumber: {
    fontSize: 16,
    color: '#777',
  },
  lapTime: {
    color: '#000',
    fontSize: 20,
    fontWeight: '300',
  },
  startBtn: {
    color: '#00cc00',
  },
  stopBtn: {
    color: 'red',
  },
  });