import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity,Image, Alert } from "react-native";
import { Block, Text, Card, Input, Button } from "../components";
import { theme, mocks } from "../constants";

export default class Transferback extends React.Component {

   state = {
       transamount:'',
   }

   onTransferBalance= ()=> {
    Alert.alert("Transfer Initiated");
    this.props.navigation.navigate("RemitView");
   };


  render() {
    const { transferlogo} = this.props;

    return (
      
        <ScrollView style = {styles.welcome} showsVerticalScrollIndicator={false}>
            <Card style={styles.card} shadow style={{ paddingVertical: theme.sizes.padding }}>
          <Block>
            <Block style = {{marginTop: 30}} center justifyContent="center" flex={false} row  >
              <Text h2 bold center>
                Transfer Back
              </Text>
            </Block>
            
           <Block style = {{marginTop: 70}}  center >
           <Block center>
                  <Image
                    source={transferlogo.transferback}
                    resizeMode="center"
                    style={{
                      width: 100,
                      height: 100
                    }}
                  />
                </Block>
              
                   <Text h3 > Amount</Text>
              </Block>
                <Input
                    
                    label=""
                    style={{ marginBottom: 100}}
                    onChangeText={transamount => this.setState({ transamount})}
                    value={this.state.transamount}
                />

<Button  style={{ marginTop: 40}} 
                 >
                        <Text button white onPress= {() => this.onTransferBalance()} > Transfer </Text>
                    </Button>

          <Block center middle flex={true} column justifyContent="center" bottom margin={30}>
            <Text > Fund transfer is initiated before 7pm EDT on business days. Your funds will be available soon in your account ending ***7111</Text>
            </Block>
        
                        
            
          </Block>
          </Card>
        </ScrollView>
      
    );
  }
}

Transferback.defaultProps = {
    transferlogo: mocks.transferlogo
  };

const styles = StyleSheet.create({
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4
  },
  header:{
    paddingHorizontal: theme.sizes.base * 2
  },

  
  card:
  {
    borderRadius: theme.sizes.border,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
    backgroundColor: theme.colors.white,
  }
});
