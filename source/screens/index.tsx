import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateScreen from './CreateScreen';
import MainScreen from './MainScreen';


const MainNavigator = createStackNavigator({
    MainScreen: {
        screen: MainScreen,
        navigationOptions: {
            header: () => null,
        }
    },
    CreateScreen: {
        screen: CreateScreen,
        navigationOptions: {
            header: () => null,
        }
    },
})

const App = createAppContainer(MainNavigator);

export default App;