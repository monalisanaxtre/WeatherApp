import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import LoginScreen from '../LoginScreen';
import {insertLoginData} from '../StorageClass'
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    componentDidMount() {
        
    }
    
    register = () => {
        let payload = {
            'EMAIL': this.state.email,
            'PHONE_NUMBER': this.state.phoneNumber,
            'FIRST_NAME': this.state.firstName,
            'LAST_NAME': this.state.lastName,
            'PASSWORD': this.state.password,
            'CONFIRM_PASSWORD' : this.state.confirmPassword,
        }
        insertLoginData(payload, (sucess) => {
            console.log("Data Saved Sucessfully.",sucess);
            if(sucess){
                this.props.navigation.navigate('LoginScreen');
            }
        });
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder='First Name'
                    onChangeText={(value) => this.setState({ firstName: value })} />
                <TextInput
                    placeholder='Last Name'
                    onChangeText={(value) => this.setState({ lastName: value })} />
                <TextInput
                    placeholder='Phone Number'
                    onChangeText={(value) => this.setState({ phoneNumber: value })}
                    keyboardType='numeric' />
                <TextInput
                    placeholder='Email'
                    onChangeText={(value) => this.setState({ email: value })} />
                <TextInput
                    placeholder='Password'
                    onChangeText={(value) => this.setState({ password: value })} />
                <TextInput
                    placeholder='Confirm Password'
                    onChangeText={(value) => this.setState({ confirmPassword: value })} />
                <Button
                    title='LogIn'
                    onPress={() => this.props.navigation.navigate('LoginScreen', { LoginScreen })} />
                <Button
                    title='Register'
                    onPress={() => this.register()} />
            </View>
        )
    }
};
export default RegisterScreen;