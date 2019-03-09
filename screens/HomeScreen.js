import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";

const pickerData = [
    { value: ''},
];

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            number: 1,
        }
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <React.Fragment>
            <Text>ストップウォッチの個数を選択してください</Text>
            <Picker
          style={[styles.picker]} itemStyle={styles.pickerItem}
          selectedValue={this.state.number}
          onValueChange={(itemValue) => this.setState({number: itemValue})}
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
          <Picker.Item label="6" value={6} />
        </Picker>
            <TouchableOpacity onPress={() => navigate('Watch', this.state.number)}>
                <Text>Go to StopWatch</Text>
            </TouchableOpacity>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    picker: {
        width: 200,
        backgroundColor: '#FFF',
    },
    pickerItem: {
        color: 'blue',
    },
});