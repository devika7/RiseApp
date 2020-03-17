import React from 'react';
import { Text, NativeEventEmitter, NativeModules, Platform , Button} from 'react-native';
import PlaidLink from 'react-native-plaid-link-sdk';


 
 export default class PlaidModule extends React.Component {


  componentDidMount() {
    const emitter = new NativeEventEmitter(Platform.OS === 'ios' ? NativeModules.RNLinksdk : NativeModules.PlaidAndroid);
    this._listener = emitter.addListener('onEvent', (e) => console.log(e));
  }
 
  componentWillUnmount() {
    if (this._listener) {
      this._listener.remove();
    }
  }
 
 
 
  render() {
    return (
<PlaidLink
      publicKey='62dfe4ae909af699b5b1296f1a8a70'
      clientName='Rise'
      env='sandbox'  // 'sandbox' or 'development' or 'production'
      product={['auth']}
      webviewRedirectUri= ' '
      
      component= {Button}
        componentProps = {{title: 'Add Account'}}
        onSuccess = {(result) => {console.log('Success: ', result)}}
        onError = {(result) => {console.log('Error: ', result)}}
        onCancelled = {(result) => {console.log('Cancelled: ', result)}}
        language = "en"
        countryCodes = {["US"]}
      // Optional props
     // countryCodes={['<# Country Code #>']}
      //language='<# Language #>'
      //userEmailAddress='<# User Email #>'
      //userLegalName='<# User Legal Name #>'
      //userPhoneNumber='<# User Phone Number #>'
      //webhook='<# Webhook URL #>'
    >
      <Text>Add Account</Text>

    </PlaidLink>












    /* <PlaidLink
       clientName='Rise Bank'
        publicKey='62dfe4ae909af699b5b1296f1a8a70'
        env='sandbox'
        onSuccess={data => console.log('success: ', data)}

        onExit={data => console.log('exit: ', data)}
        onCancelled = {(result) => {console.log('Cancelled: ', result)}}
        product={['auth']}
        language='en'
        countryCodes={['US']}
      >
        <Text>Add Account</Text>
      </PlaidLink>

      */
    );
  }
}