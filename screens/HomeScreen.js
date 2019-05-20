import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker, Switch } from "react-native";

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stopWatchNumber: 1,
            lapNumber: 5000,
            multipleMode: 1,
            switching: false,
        }
    }

    switchValue = (value) => {
        this.setState({ switching: value });
    }

    render(){
        const { navigate } = this.props.navigation;
        const switching = this.state.switching;
        return(
            <View style={styles.container}>
                <View style={styles.quantitySelection}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>ストップウォッチの個数を選択</Text>
                <Picker
                    style={[styles.picker]} itemStyle={styles.pickerItem}
                    selectedValue={this.state.stopWatchNumber}
                    onValueChange={(itemValue) => this.setState({stopWatchNumber: itemValue})}
                >
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                </Picker>
                </View>
                <View style={styles.distanceSelection}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>計測距離を選択</Text>
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
                </View>
                <View style={styles.timerSelection}>
                <Text style={{fontWeight: 'bold'}}>タイマー</Text>
                    <Switch style = {styles.switch} onValueChange = {this.switchValue} value = { switching }/>
                </View>
                <View style={styles.buttonWrap}>
                <View style={styles.normalButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Watch', {count: this.state.stopWatchNumber, lap: this.state.lapNumber, timer: switching, simultaneous: false} )}>
                    <Text style={styles.startText}>通常スタート</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.simultaneousButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('Watch', {count: this.state.stopWatchNumber, lap: this.state.lapNumber, timer: switching, simultaneous: true} )}>
                    <Text style={styles.startText}>同時スタート</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
    },
    quantitySelection: {
        flex: 1,
        alignItems: 'center',
    },
    distanceSelection: {
        flex: 1,
        alignItems: 'center',
    },
    timerSelection: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrap: {
        flex: 1,
        flexDirection: 'row',
    },
    simultaneousButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    normalButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        height: 200,
        width: 200,
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
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#44aeea',
        borderRadius: 100,
    },
    switch: {
        margin:20,
    }
});