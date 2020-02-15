import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native';
import { Button, Text, Block, Input } from "../components";
import * as theme from '../constants/theme';
import axios from 'axios';

const { height } = Dimensions.get('window');


export default class SignupScreen1 extends React.Component {

    state = {
        email: '',
        password: '',
        myid: '',
        first_name: '',
        last_name: ''
    }


    ContinueButtonPress = () => {

        const { email, password, myid, first_name, last_name } = this.state
        //this.HandleRequest.bind(this);
        const payload = { username: this.state.email, email: this.state.email, password: this.state.password, first_name: this.state.first_name, last_name: this.state.last_name }
        axios
            .post(`http://127.0.0.1:8000/accounts/auth/register`, payload)
            .then(response => {
                const { token, user } = response.data;

                // We set the returned token as the default authorization header
                axios.defaults.headers.common.Authorization = `Token ${token}`;
                const myid = response.data.user.id
                this.props.navigation.navigate('Signup2', { userid: myid, fname: first_name, lname: last_name })

            })


            // .then(this.props.navigation.navigate('Signup2', { email1: this.state.email }))
            .catch(error => console.log(error));

    }

    render() {
        return (
            <ScrollView>
                <Block center style={{ marginTop: 30 }}>

                    <Input
                        full
                        email
                        label="Email Address"
                        style={{ marginBottom: 25 }}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}


                    />
                    <Input
                        full
                        password
                        label="Password"
                        style={{ marginBottom: 25 }}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />

                    <Input
                        full
                        first_name
                        label="First Name"
                        style={{ marginBottom: 25 }}
                        onChangeText={first_name => this.setState({ first_name })}
                        value={this.state.first_name}


                    />

                    <Input
                        full
                        last_name
                        label="Last Name"
                        style={{ marginBottom: 25 }}
                        onChangeText={last_name => this.setState({ last_name })}
                        value={this.state.last_name}


                    />


                    <Button
                        full
                        style={{ marginBottom: 12 }}
                        onPress={this.ContinueButtonPress}
                    >
                        <Text button> Continue </Text>
                    </Button>
                    <Text paragraph color="gray">
                        Already have an account? <Text
                            height={18}
                            color="blue"
                            onPress={() => this.props.navigation.navigate('Login')}>
                            Sign in
              </Text>
                    </Text>
                </Block>
            </ScrollView>
        );
    }
}


