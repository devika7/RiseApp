import React, { Component } from 'react';
import { View, Image, TouchableWithoutFeedback, Dimensions, ScrollView } from 'react-native';
import { Button, Text, Block, Input } from "../components";
import * as theme from '../constants/theme';

const { height } = Dimensions.get('window');

export default class SignupScreen2 extends React.Component {


    state = {
        add1: '',
        add2: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        id: this.props.navigation.state.params.userid,


    }


    render() {
        return (

            <ScrollView>
                <Block center style={{ marginTop: 30 }}>

                    <Input
                        full
                        label="Address Line 1 - Street "
                        style={{ marginBottom: 15 }}
                        onChangeText={add1 => this.setState({ add1 })}
                        value={this.state.add1}
                    />
                    <Input
                        full
                        label="Address Line 2 - Apt No "
                        style={{ marginBottom: 15 }}
                        onChangeText={add2 => this.setState({ add2 })}
                        value={this.state.add2}
                    />

                    <Input
                        full
                        label="City"
                        style={{ marginBottom: 15 }}
                        onChangeText={city => this.setState({ city })}
                        value={this.state.city}
                    />

                    <Input
                        full
                        label="State"
                        style={{ marginBottom: 15 }}
                        onChangeText={state => this.setState({ state })}
                        value={this.state.state}
                    />
                    <Input
                        full
                        label="Country"
                        style={{ marginBottom: 15 }}
                        onChangeText={country => this.setState({ country })}
                        value={this.state.country}
                    />
                    <Input
                        full numeric
                        label="Zipcode"
                        style={{ marginBottom: 15 }}
                        onChangeText={zipcode => this.setState({ zipcode })}
                        value={this.state.zipcode}
                    />

                    <Button
                        full
                        style={{ marginBottom: 12 }}


                        onPress={() => this.props.navigation.navigate('Signup3', {
                            add1: this.state.add1, add2: this.state.add2, city: this.state.city,
                            state: this.state.state, country: this.state.country, zipcode: this.state.zipcode, id: this.state.id

                        })}
                    >
                        <Text button> Continue </Text>
                    </Button>

                </Block>
            </ScrollView>

        );
    }
}


