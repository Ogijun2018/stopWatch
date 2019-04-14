import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import StopWatch from '../components/StopWatch';

export default class SWScreen extends React.Component {
    render() {
      let StopWatches = [];
      const count = this.props.navigation.state.params.count;
      const lapNum = this.props.navigation.state.params.lap;
      for(let i = 0; i < count; i++){
        StopWatches.push(
          <StopWatch key={i} count={count} distance={lapNum}></StopWatch>
        );
      }

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