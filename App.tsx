
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from "mobx-react";
import Application from './source/screens'
import DoctorStore from './source/store/DoctorStore'
const store = {
  doctors: DoctorStore,
};

const App = () => {
  return (
    <Provider {...store}>
      <Application />
    </Provider>
  );
};


export default App;
