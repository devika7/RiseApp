import React from 'react';
//import { Text, View, Image } from 'react-native';
import PlaidAuthenticator from 'react-native-plaid-link';


export default class NewPlaid extends React.Component {
  
    state = {
        data: {},
        status: ''
      };

  static navigationOptions = {
    title: '',
    // headerStyle: styles.headerStyle,
    //headerTitleStyle: { color: colorTheme.white.snow
   // }
  };

  render() {
    return (
        <PlaidAuthenticator
        onMessage={this.onMessage}
          publicKey="62dfe4ae909af699b5b1296f1a8a70"
          env="sandbox"
          product="auth"
          clientName="Rise"
        />
      );

  }



  /*renderDetails() {
    this.props.sendToken(this.state.data.metadata.public_token);

    return (
      <View style={styles.container}>
        <View style={styles.linkLogoLocation}>
          <Image
            style={styles.logo}
            source={require('../../../public/img/logo2.png')}
          />
        </View>
        <Text style={styles.h1}>NEXT STEP</Text>
        <View style={styles.initialButtonLocation}>
          <View style={{ padding: 10 }}>
            <Button
              raised
              buttonStyle={styles.smallOrangeButton}
              textStyle={{ textAlign: 'center' }}
              title={`Set Up Your Budget`}
              onPress={() =>
                this.props.navigation.navigate('BudgetSetup', {
                  title: 'BudgetSetup'
                })
              }
            />
          </View>
        </View>
      </View>
    );
  }
*/
  onMessage = data => {
    this.setState({
      data,
      status: data.action.substr(data.action.lastIndexOf(':') + 1).toUpperCase()
    })
  
  };



}

//const mapDispatch = dispatch => {
 // return {
    // rename to same thing - shorthand
   // sendToken: token => dispatch(sendToken(token))
  //};
//};

