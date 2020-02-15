import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native';
import { Button, Text, Block, Input } from "../components";
import * as theme from '../constants/theme';
import axios from 'axios';

export default class LoginScreen extends React.Component {


    state = {
        username: '',
        password: '',

    }


    onLoginButtonPress = () => {

        const payload = { username: this.state.email, password: this.state.password }
        axios
            .post(`http://127.0.0.1:8000/accounts/auth/login`, payload)
            .then(response => {
                const { token, user } = response.data;

                // We set the returned token as the default authorization header
                axios.defaults.headers.common.Authorization = `Token ${token}`;


            }).then(this.setState = {
                username: '',
                password: ''
            })
            .then(() => this.props.navigation.navigate('MainTabNavigator'))
            .catch(error => console.log(error));

    }

    render() {
        return (
            <ScrollView>
                <Block center style={{ marginTop: 100 }}>

                    <Input
                        full
                        email
                        label="Email Address"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        style={{ marginBottom: 25 }}

                    />
                    <Input
                        full
                        password
                        label="Password"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        style={{ marginBottom: 25 }}
                    />

                    <Button
                        full
                        style={{ marginBottom: 12 }}
                        onPress={() => this.onLoginButtonPress()}
                    >
                        <Text button> Login </Text>
                    </Button>
                    <Text paragraph color="gray">
                        Dont't have an account? <Text
                            height={18}
                            color="blue"
                            onPress={() => this.props.navigation.navigate('Signup')}>
                            Sign Up
          </Text>
                    </Text>
                    <Text paragraph color="gray">
                        Forgot Password? <Text
                            height={18}
                            color="blue"
                            onPress={() => this.props.navigation.navigate('Reset')}>
                            Reset Password
          </Text>
                    </Text>
                </Block>
            </ScrollView>

        );
    }
}



