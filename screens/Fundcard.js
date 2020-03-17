import React , {PropTypes} from "react";
import { StyleSheet, ScrollView, TouchableOpacity,Image, Alert } from "react-native";
import { Block, Text, Card, Input, Button , InputwithButton} from "../components";
import { theme, mocks } from "../constants";
import { ThemeColors } from "react-navigation";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY= "INR";
const BASE_PRICE = "1";
const QUOTE_PRICE = "73.33";

export default class Fundcard extends React.Component {

   state = {
       fundamount: 0,
       quoteamount: 0,
       
   }

   onFundCard= ()=> {
    Alert.alert("Card Loaded!");
    this.props.navigation.navigate("RemitView");
   

 };


 handlePressBaseCurrency = () =>{

 };

 handlePressQuoteCurrency = () => {

};

  handleTextChange = (text) =>{
    console.log('change text', text);
  }
  
 

  render() {
    const { transferlogo} = this.props;

    
    return (
      
        <ScrollView style = {styles.welcome} showsVerticalScrollIndicator={false}>
            <Card style={styles.card} shadow style={{ paddingVertical: theme.sizes.padding }}>
          <Block>
            <Block style = {{marginTop: 30}} center justifyContent="center" flex={false} row  >
              <Text h2 bold center>
                Fund Card 
              </Text>
            </Block>
            
           <Block style = {{marginTop: 70}}  center >
           <Block center>
                  <Image
                    source={transferlogo.fundcc}
                    resizeMode="center"
                    style={{
                      width: 100,
                      height: 100
                    }}
                  />
                </Block>
              
                   <Text h3 > Amount</Text>
              </Block>
              <InputwithButton 
              buttonText = {TEMP_BASE_CURRENCY}
              onPress = {this.handlePressBaseCurrency}
              defaulValue = {BASE_PRICE}
              keyboardType = "numeric"
              onChangeText ={fundamount => this.setState({ fundamount})}
              value={this.state.fundamount}
             />

<InputwithButton 
              buttonText = {TEMP_QUOTE_CURRENCY}
              onPress = {this.handlePressQuoteCurrency()}
              editable = {false}
              value = { this.state.fundamount + 73}
            
             />
                
                

<Button  style={{ marginTop: 40}} 
                 >
                        <Text button white onPress={() => this.onFundCard()} > Fund Card </Text>
                    </Button>

          <Block center middle flex={true} column justifyContent="center" bottom margin={30}>
            <Text > Fund transfer is initiated before 7pm EDT on business days. Your funds will be available soon</Text>
            </Block>
        
                        
            
          </Block>
          </Card>
        </ScrollView>
      
    );
  }
}

Fundcard.defaultProps = {
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


/*
<Input
                    
                    label=""
                    style={{ marginBottom: 100}}
                    onChangeText={fundamount => this.setState({ fundamount})}
                    value={this.state.fundamount}
                />

                */