import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
class DashboardScreen extends Component{

  render(){
    return(
      <View>
        <Text>Welcome</Text>
      </View>
    )
  }
};
export default DashboardScreen;