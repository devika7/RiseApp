import React, { Component } from 'react'
import { Text, View } from "react-native"
import PlaidLink from 'react-plaid-link'
import { TouchableOpacity } from 'react-native-gesture-handler';

class PlaidModule extends Component {
    handleOnSuccess(token, metadata) {
        // send token to client server
    }
    handleOnExit() {
        // handle the case when your user exits Link
    }
    render() {
        return (
            <PlaidLink
                ClientName="Rise"
                Env="sandbox"
                Product={["auth"]}
                PublicKey="62dfe4ae909af699b5b1296f1a8a70"
                OnExit={this.handleOnExit}
                OnSuccess={this.handleOnSuccess}>
                <View>

                    <Text>  Open Link and connect your bank!
                </Text>

                </View>

            </PlaidLink>
        )
    }
}
export default PlaidModule