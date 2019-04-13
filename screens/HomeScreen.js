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
            <View style={styles.container}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>ストップウォッチの個数を選択してください</Text>
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
            <TouchableOpacity style={styles.button} onPress={() => navigate('Watch', this.state.number)}>
                <Text style={styles.startText}>開始</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        width: 300,
        backgroundColor: '#FFF',
    },
    pickerItem: {
        fontSize: 20,
        color: 'blue',
    },
    startText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C0C0C0',
        borderRadius: 20,
    },
});