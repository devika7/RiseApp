import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { PropTypes } from 'prop-types';
import omit from 'object.omit';

const injectedJavaScript = `(function() {
  window.postMessage = function(data) {
    window.ReactNativeWebView.postMessage(data);
  };
})()`;

 export default class PlaidAuthenticator extends Component {
  render() {

    return(

      <PlaidAuthenticator
    onMessage={this.onMessage}
    publicKey="62dfe4ae909af699b5b1296f1a8a70"
    env="sandbox"
    product="auth"
    clientName="Rise App "
    selectAccount={false}
  />

      
    );

    
  }
}