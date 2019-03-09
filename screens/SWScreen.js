import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import StopWatch from '../components/StopWatch';


export default class SWScreen extends React.Component {
   
    render() {
      const items = [];
      const count = this.props.navigation.state.params;
      for(let i = 0; i < count; i++){
        items.push(
          <StopWatch key={i}></StopWatch>
        );
      }

      return (
        <View>
          {items}
          {/* <Timer 
            totalDuration={this.state.totalDuration} 
            start={this.state.timerStart}
            reset={this.state.timerReset}
            options={this.options}
            handleFinish={this.handleTimerComplete}
            getTime={this.getFormattedTime} />
          <TouchableHighlight onPress={this.toggleTimer}>
            <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetTimer}>
            <Text style={{fontSize: 30}}>Reset</Text>
          </TouchableHighlight> */}
        </View>
      );
    }
   
  handleTimerComplete = () => alert("custom completion function");
   
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
   
  //AppRegistry.registerComponent('TestApp', () => TestApp);
}