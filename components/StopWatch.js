import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, Dimensions, TextInput
  } from 'react-native';
import moment from 'moment';

const { height, width } = Dimensions.get('window');

function Timer({ interval, style }) {
  const pad = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <View style={styles.timerContainer}>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())}.</Text>
      <Text style={style}>{pad(centiseconds)}</Text>
    </View>
  )
}

function RoundButton({ title, color, background, onPress, disabled }) {
  return (
    <View
      onTouchEnd={() => !disabled && onPress()}
      style={[ styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.buttonBorder}>
        <Text style={[ styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </View>
  )
}
function Lap({ number, interval, fastest, slowest }) {
  const lapStyle = [
    styles.lapText,
    fastest && styles.fastest,
    slowest && styles.slowest,
  ]
  return (
    <View style={styles.lap}>
      <Text style={lapStyle}>Lap {number}</Text>
      <Timer style={[lapStyle, styles.lapTimer]} interval={interval}/>
    </View>
  )
}

function LapsTable({ laps, timer }) {
  const finishedLaps = laps.slice(1)
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  if (finishedLaps.length >= 2) {
    finishedLaps.forEach(lap => {
      if (lap < min) min = lap
      if (lap > max) max = lap
    })
  }
  return (
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <Lap
          number={laps.length - index}
          key={laps.length - index}
          interval={index === 0 ? timer + lap : lap}
          fastest={lap === min}
          slowest={lap === max}
        />
      ))}
    </ScrollView>
  )
}

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [ ],
    }
  }

  componentDidMount() {
    if(this.props.simultaneous === true){
    this.start();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  start = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      laps: [0],
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 10)
  }
  
  lap = () => {
    const timestamp = new Date().getTime()
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp,
    })
  }

  stop = () => {
    clearInterval(this.timer)
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0,
    })
  }
  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    })
  }
  resume = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 10)
  }
  sum = (arr) => {
    let sum = 0;
    arr.forEach(function(elm){
      sum += elm;
    });
    return sum;
  };

  /**
 * ミリ秒を時分秒へ変換
 * ms ミリ秒
 */
  computeDuration = (ms) => {
  var h = String(Math.floor(ms / 3600000) + 100).substring(1);
  var m = String(Math.floor((ms - h * 3600000)/60000)+ 100).substring(1);
  var s = String(Math.round((ms - h * 3600000 - m * 60000)/1000)+ 100).substring(1);
  return h+':'+m+':'+s;
}

  foreCast = (laps, distance) => {
    let howmanyAround = distance / 400;
    return(
    this.computeDuration(this.sum(laps.slice(1)) + laps[1] * (howmanyAround - laps.slice(1).length))
    );
  }

  render() {
    const distance = this.props.distance;
    const { now, start, laps } = this.state
    const timer = now - start
    //laps[1]..."Lap"を押した時の一番上のラップ
    //lapForc今までのラップタイム)+(最新のラップタイム)*(残りの周数)
    let lapForecast = this.foreCast(laps, distance);
    let lapsLeft = (distance / 400) - laps.slice(1).length;
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          placeholder={"名前を記入"}
          style={{ width: width / 2, height: 30, fontSize: 20, fontWeight: 'bold',}}
        />
        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
          style={styles.timer}
        />
        {/*一番最初の状態*/}
        {laps.length === 0 && (
          <ButtonsRow>
            <RoundButton
              title='Lap'
              color='#8B8B90'
              background='#151515'
              disabled
            />
            <RoundButton
              title='Start'
              color='white'
              background='#1B361F'
              onPress={this.start}
            />
          </ButtonsRow>
        )}
        {/*スタートしたとき*/}
        {start > 0 && (
          <ButtonsRow>
            <RoundButton
              title='Lap'
              color='#FFFFFF'
              background='#3D3D3D'
              onPress={this.lap}
            />
            <RoundButton
              title='Stop'
              color='#E33935'
              background='#3C1715'
              onPress={this.stop}
            />
          </ButtonsRow>
        )}
        
        {laps.length > 0 && start === 0 && (
          <ButtonsRow>
            <RoundButton
              title='Reset'
              color='#FFFFFF'
              background='#3D3D3D'
              onPress={this.reset}
            />
            <RoundButton
              title='Start'
              color='white'
              background='#1B361F'
              onPress={this.resume}
            />
          </ButtonsRow>
        )}
        {/* laps.slice(1).lengthはラップ数 */}
        {distance !== 0 && (
        <Text style={{fontSize: 15}}>
          {distance}mまであと{lapsLeft > 0 ? lapsLeft : "0"}周
          Lap{laps.slice(1).length}のペースでいくと{laps.slice(1).length > 0 && lapsLeft > 0 ? lapForecast : ""}</Text>
          )}
        <LapsTable laps={laps} timer={timer}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: height / 2 - 50,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#D3D3D3',
    borderRadius: 20,
  },
  timer: {
    color: 'black',
    fontSize: 40,
    width: 60,
    paddingBottom: 5,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder: {
    width: 60,
    height: 60,
    borderRadius: 38,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  lapText: {
    color: 'black',
    fontSize: 18,
  },
  lapTimer: {
    width: 30,
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  fastest: {
    color: '#4BC05F',
  },
  slowest: {
    color: '#CC3531',
  },
  timerContainer: {
    flexDirection: 'row',
  }
})