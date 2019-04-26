import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";

const pickerData = [
    { value: ''},
];

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stopWatchNumber: 1,
            lapNumber: 5000,
            multipleMode: 1,
        }
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>ストップウォッチの個数を選択してください</Text>
            <Picker
          style={[styles.picker]} itemStyle={styles.pickerItem}
          selectedValue={this.state.stopWatchNumber}
          onValueChange={(itemValue) => this.setState({stopWatchNumber: itemValue})}
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
        </Picker>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>何mのラップをとるか選択してください</Text>
            <Picker
          style={[styles.picker]} itemStyle={styles.pickerItem}
          selectedValue={this.state.lapNumber}
          onValueChange={(itemValue) => this.setState({lapNumber: itemValue})}
        >
            <Picker.Item label="なし" value={0}/>
          <Picker.Item label="1000m" value={1000} />
          <Picker.Item label="1500m" value={1500} />
          <Picker.Item label="2000m" value={2000} />
          <Picker.Item label="3000m" value={3000} />
          <Picker.Item label="4000m" value={4000} />
          <Picker.Item label="5000m" value={5000} />
          <Picker.Item label="6000m" value={6000} />
          <Picker.Item label="7000m" value={7000} />
          <Picker.Item label="8000m" value={8000} />
          <Picker.Item label="9000m" value={9000} />
          <Picker.Item label="10000m" value={10000} />
        </Picker>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>ストップウォッチを同時スタートするか、単発で使うか選択</Text>
        <Picker
          style={[styles.picker]} itemStyle={styles.pickerItem}
          selectedValue={this.state.multipleMode}
          onValueChange={(itemValue) => this.setState({multipleMode: itemValue})}
        >
          <Picker.Item label="複数モード" value={1} />
          <Picker.Item label="単発モード" value={2} />
        </Picker>
            <TouchableOpacity style={styles.button} onPress={() => navigate('Watch', {count: this.state.stopWatchNumber, lap: this.state.lapNumber, multiple: this.state.multipleMode} )}>
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