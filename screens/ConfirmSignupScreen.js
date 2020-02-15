import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback, Dimensions, ScrollView, Alert } from 'react-native';
import { Button, Text, Block, Input } from "../components";
import * as theme from '../constants/theme';
import axios from 'axios';

const { height } = Dimensions.get('window');


export default class ConfirmSignupScreen extends React.Component {



    onRegister = () => {

        fetch('http://127.0.0.1:8000/accounts/auth/useraccount', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${axios.defaults.headers.common.Authorization}`
            },
            body: JSON.stringify({
                'user': `${this.props.navigation.state.params.userid1}`,
                'primaryPhone': `${this.props.navigation.state.params.phone}`,
                'address1': `${this.props.navigation.state.params.address1}`,
                'address2': `${this.props.navigation.state.params.address2}`,
                'city': `${this.props.navigation.state.params.usercity}`,
                'state': `${this.props.navigation.state.params.userstate}`,
                'postalCode': `${this.props.navigation.state.params.userzipcode}`,
                'address_country': `${this.props.navigation.state.params.usercountry}`,
                // 'dateOfBirth': `${this.props.navigation.state.params.dob}`,
                'incSource': `${this.props.navigation.state.params.income}`,
                'profession': `${this.props.navigation.state.params.prof}`



            })
        }).catch(error => console.log(error))
            .then(Alert.alert("Registration Successfull , Proceed to Login"))
            .then(this.props.navigation.navigate('ConnectBank'))


    }
    render() {
        return (

            <ScrollView>
                <Block center style={{ marginTop: 30 }}>
                    < Text h3 center> Confirm Details here </Text>
                    <Text title center>{this.props.navigation.state.params.address1}</Text>
                    <Text title center>{this.props.navigation.state.params.address2}</Text>
                    <Text title center>{this.props.navigation.state.params.usercity}</Text>
                    <Text title center>{this.props.navigation.state.params.userstate}</Text>
                    <Text title center>{this.props.navigation.state.params.usercountry}</Text>
                    <Text title center>{this.props.navigation.state.params.userzipcode}</Text>
                    <Text title center>{this.props.navigation.state.params.phone}</Text>
                    <Text title center>{this.props.navigation.state.params.dob}</Text>
                    <Text title center>{this.props.navigation.state.params.income}</Text>
                    <Text title center>{this.props.navigation.state.params.prof}</Text>

                    <Block flex={true} row style={{ marginTop: 20 }}>
                        <Button
                            style={{ marginBottom: 12 }}
                            onPress={() => this.onRegister()}
                        >
                            <Text button> Confirm Details </Text>
                        </Button>

                        <Button
                            style={{ marginBottom: 12 }}
                            onPress={() => this.props.navigation.navigate('SignupScreen2')}
                        >
                            <Text button> Edit Details </Text>
                        </Button>
                    </Block>
                </Block>
            </ScrollView>

        );
    }
}


