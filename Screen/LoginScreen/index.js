import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../RegisterScreen';
import { createTables } from '../SQLite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/Actions/actions';

const Stack = createNativeStackNavigator();

class LoginScreen extends Component{

    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
        }
    }

    componentDidMount(){
        createTables();
    }

    logEmail(email){
        // let {actions} = this.props;
        // actions.email(email);
        if(this.state.email == '' || this.state.password == ''){

            alert("Enter You're Login Details");
        }else{
            this.props.navigation.navigate('DashboardScreen');
            alert("Sucessfull")
        }
    }


  render(){
    return(
      <View>
      <TextInput
      placeholder='Email'
      onChangeText={(value) => this.setState({email:value})}/>
      <TextInput
      placeholder='Password'
      onChangeText={(value) => this.setState({password:value})}/>
      <Button
      title='LogIn'
      onPress={() => this.logEmail()}/>
      <Button
      title='SignUp'
      onPress={() => this.props.navigation.navigate('RegisterScreen', { RegisterScreen })}/>
      </View>
    )
  }
};
export default LoginScreen;