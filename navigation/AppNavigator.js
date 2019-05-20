import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';
import SWScreen from '../screens/SWScreen';

const Stack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Setting',
      }),
    },
    Watch: {
      screen: SWScreen,
      navigationOptions: () => ({
        title: 'Stop Watch',
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