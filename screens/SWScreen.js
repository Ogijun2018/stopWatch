import React from "react";
import { StyleSheet, View, Dimensions, ScrollView, KeyboardAvoidingView } from "react-native";
import StopWatch from '../components/StopWatch';
import Timer from '../components/Timer';

export default class SWScreen extends React.Component {
    render() {
      let StopWatches = [];
      const count = this.props.navigation.state.params.count;
      const switching = this.props.navigation.state.params.timer;
      const lapNum = this.props.navigation.state.params.lap;
      let simultaneous = this.props.navigation.state.params.simultaneous;
      for(let i = 0; i < count; i++){
        StopWatches.push(
          <StopWatch distance={lapNum} simultaneous={simultaneous}></StopWatch>
        );
      }
      //タイマーのスイッチ
      if(switching === true){
      StopWatches.push(
        <Timer />
      );
      }

      return(
      <KeyboardAvoidingView behavior="padding">
      <ScrollView>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {StopWatches}
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
      );
      }
} 