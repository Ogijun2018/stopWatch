import React from "react";
import { StyleSheet, View, Dimensions, ScrollView, KeyboardAvoidingView } from "react-native";
import StopWatch from '../components/StopWatch';
import Timer from '../components/Timer';

const { height, width } = Dimensions.get('window');

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
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {StopWatches}
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
      );
      }
} 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  multipleStart: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'gray',
    opacity: 0.4,
  },
})