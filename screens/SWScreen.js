import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import StopWatch from '../components/StopWatch';
import Timer from '../components/Timer';

export default class SWScreen extends React.Component {
    render() {
      let StopWatches = [];
      const count = this.props.navigation.state.params.count;
      const lapNum = this.props.navigation.state.params.lap;
      //const duration = this.props.navigation.state.params.duration;
      for(let i = 0; i < count; i++){
        StopWatches.push(
          <StopWatch key={i} count={count} distance={lapNum}></StopWatch>
        );
      }
      StopWatches.push(
        <Timer duration={60000}></Timer>
      );

      return(
      <View style={styles.container}>
        {StopWatches}
      </View>
      );
      }
} 

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})