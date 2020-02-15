import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native';
import { Button, Text, Block, Input } from "../components";
import * as theme from '../constants/theme';

const { height } = Dimensions.get('window');

export default class SignupScreen3 extends React.Component {

    state = {
        phone: '',
        dob: '',
        income: '',
        prof: '',
        address1: this.props.navigation.state.params.add1,
        address2: this.props.navigation.state.params.add2,
        usercity: this.props.navigation.state.params.city,
        userstate: this.props.navigation.state.params.state,
        usercountry: this.props.navigation.state.params.country,
        userzipcode: this.props.navigation.state.params.zipcode,
        userid1: this.props.navigation.state.params.id,




    }


    render() {
        return (

            <ScrollView>
                <Block center style={{ marginTop: 30 }}>
                    <Input
                        full phone
                        label="Phone Number"
                        style={{ marginBottom: 15 }}
                        onChangeText={phone => this.setState({ phone })}
                        value={this.state.phone}
                    />

                    <Input
                        full
                        label="Date of Birth"
                        style={{ marginBottom: 15 }}
                        onChangeText={dob => this.setState({ dob })}
                        value={this.state.dob}
                    />

                    <Input
                        full
                        label="Income Source"
                        style={{ marginBottom: 15 }}
                        onChangeText={income => this.setState({ income })}
                        value={this.state.income}
                    />
                    <Input
                        full
                        label="Profession"
                        style={{ marginBottom: 15 }}
                        onChangeText={prof => this.setState({ prof })}
                        value={this.state.prof}
                    />

                    <Button
                        full
                        style={{ marginBottom: 12 }}
                        onPress={() => this.props.navigation.navigate('ConfirmSignup', {
                            address1: this.state.address1, address2: this.state.address2,
                            usercity: this.state.usercity, userstate: this.state.userstate,
                            usercountry: this.state.usercountry, userzipcode: this.state.userzipcode,
                            phone: this.state.phone, dob: this.state.dob, income: this.state.income, prof: this.state.prof,
                            userid1: this.state.userid1,

                        })}
                    >
                        <Text button> Register </Text>
                    </Button>

                </Block>
            </ScrollView>

        );
    }
}


