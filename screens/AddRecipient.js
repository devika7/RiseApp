import React from "react";
import { StyleSheet, ScrollView , Alert, TouchableOpacity } from "react-native";
import { Block, Text, Card, Badge, Input, Button } from "../components";
import { theme, mocks } from "../constants";


export default class AddRecipient extends React.Component {
  state = {
   Recipientfname: " ",
   Recipientlname: " ",
   Rphone: " ",
  Remail : "",
  Rstreet: "",
  RCity: "",
  RState: "",
  Rbankacc: " ",
  Rswiftcode: " "
  };

  onRecipientPress = () => {
    Alert.alert("Recipient Added");
    this.props.navigation.navigate("RemitView");
 };


  render() {
   

    return (
        <React.Fragment>
          <ScrollView>
                <Block center style={{ marginTop: 30 }}>

                    <Input
                        full
                        Recipientfname
                        label="Recipient FirstName"
                        style={{ marginBottom: 25 }}
                        onChangeText={Recipientfname => this.setState({ Recipientfname})}
                        value={this.state.Recipientfname}


                    />
                     <Input
                        full
                        Recipientlname
                        label="Recipient LastName"
                        style={{ marginBottom: 25 }}
                        onChangeText={Recipientlname => this.setState({ Recipientlname})}
                        value={this.state.Recipientlname}


                    />
                    <Input
                        full
                        Rphone
                        label="Phone Number"
                        style={{ marginBottom: 25 }}
                        onChangeText={ Rphone=> this.setState({ Rphone})}
                        value={this.state.Rphone}
                    />

                    <Input
                        full
                        Remail
                        label="Recipient's Email"
                        style={{ marginBottom: 25 }}
                        onChangeText={Remail => this.setState({ Remail})}
                        value={this.state.Remail}


                    />

                    <Input
                        full
                        Rstreet
                        label="Street Address"
                        style={{ marginBottom: 25 }}
                        onChangeText={Rstreet => this.setState({ Rstreet})}
                        value={this.state.Rstreet}


                    />

<Input
                        full
                        RCity
                        label="City"
                        style={{ marginBottom: 25 }}
                        onChangeText={RCity => this.setState({ RCity})}
                        value={this.state.RCity}


                    />

<Input
                        full
                        RState
                        label="Street Address"
                        style={{ marginBottom: 25 }}
                        onChangeText={RState => this.setState({ RState})}
                        value={this.state.RState}


                    />

<Input
                        full
                        Rbankacc
                        label="Bank Account Number"
                        style={{ marginBottom: 25 }}
                        onChangeText={Rbankacc=> this.setState({ Rbankacc})}
                        value={this.state.Rbankacc}


                    />

<Input
                        full
                        Rswiftcode
                        label="Bank Swift Code"
                        style={{ marginBottom: 25 }}
                        onChangeText={Rswiftcode => this.setState({ Rswiftcode})}
                        value={this.state.Rswiftcode}


                    />
                    <Block>
                   <Button
                        
                        style={{ marginBottom: 12 }}


                        onPress={() =>this.onRecipientPress() }
                    >
                        <Text white button> Add Recipient </Text>
                    </Button>
                    </Block>
                    </Block>
            </ScrollView>

      
          </React.Fragment>
      
    
    );
  }
}


const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4
  }
});
