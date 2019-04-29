import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions,ScrollView } from "react-native";
import StopWatch from '../components/StopWatch';
import Timer from '../components/Timer';

const { height, width } = Dimensions.get('window');

export default class SWScreen extends React.Component {
  
    state = {disabled: false}

    _onPressButton = () => {
      console.log('changed multiple');
      this.setState({disabled: true});
    }

    render() {
      let StopWatches = [];
      const count = this.props.navigation.state.params.count;
      const lapNum = this.props.navigation.state.params.lap;
      let multiple = {multiple: this.props.navigation.state.params.multiple};
      for(let i = 0; i < count; i++){
        StopWatches.push(
          <StopWatch key={i} count={count} distance={lapNum} number={i}></StopWatch>
        );
      }
      StopWatches.push(
        <Timer />
      );

      return(
      <View style={styles.container}>
      <ScrollView>
      {/* <TouchableOpacity disabled={this.state.disabled} onPress={this._onPressButton}>
      <Text>Start</Text>
      </TouchableOpacity> */}
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {StopWatches}
      </View>
      </ScrollView>
      </View>
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