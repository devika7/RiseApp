import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../components';
import axios from 'axios';

export default class LogoutScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            Users: [],


        };

    }

    ComponentDidMount() {
        fetch('http://127.0.0.1:8000/accounts/auth/useraccount')
            .then(response => response.json())
            .then((responseJson) => {

                this.setState({
                    loading: false,
                    Users: responseJson
                })

                console.log(response)
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }


    onLogoutButtonPress = () => {
        fetch('http://127.0.0.1:8000/accounts/auth/logout', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${axios.defaults.headers.common.Authorization}`
            }
        }).catch(error => console.log(error))
            .then(this.props.navigation.navigate('Login'))


    }

    render() {
        return (
            <Block center style={{ marginTop: 100 }} >




                <Text
                    height={25}
                    color="blue"
                    onPress={() => this.onLogoutButtonPress()}>
                    Logout
              </Text>

            </Block>
        );
    }
}




