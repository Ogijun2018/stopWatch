import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';
import SWScreen from '../screens/SWScreen';
//import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: '設定画面',
      }),
    },
    Watch: {
      screen: SWScreen,
      navigationOptions: () => ({
        title: 'ストップウォッチ',
      }),
    },
    Result: {
      screen: ResultScreen,
      navigationOptions: () => ({
        title: 'リザルト画面（仮）',
      }),
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(Stack);

export default class AppNavigator extends React.Component {
  state = {
    start: false,
  }

  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
        />
    );
  }
}