import React from "react";
import { StyleSheet, ScrollView , TouchableOpacity, View,
    ImageBackground, Dimensions,
    Image,
    Platform,
    

} from "react-native";

import { Block, Text, Card, ColorCard, Input, Button,  } from "../components";
import {theme, mocks} from "../constants";

const { width } = Dimensions.get("window");


const BASE_SIZE = { width: 300, height: 190 };



export default class Activate extends React.Component {
 

    render()
    {
      const { Icons} = this.props;

        return(
            <React.Fragment>
            <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}
            >
            <Block style = {{marginTop: 20}} center  flex={false} row  >
              <Text h3 bold center>
                Send via family card
              </Text>
            </Block>
            <Block>
            <ColorCard shadow style={{ paddingVertical: theme.sizes.padding }}>
          
        
           
          <Block style = {{marginBottom: 8 }}><Text h1 bold white > RISE </Text>
         </Block>
           <Text h3 bold spacing = {2.0} style> 4450 5511 2200 9970  </Text>
           <Block //flex = {true} row space = "between" 
           style={{ marginTop: 15}}>
            <Text> Exp. 20/22 </Text>
           </Block>
           <Block flex = {true} row space = "between" style={{ marginTop: 15 }}>
             <Block style = { {marginTop: 5}}>
           <Text bold> TEJAS R DESSAI</Text> 
           </Block>
           <Image
                   source={Icons.visa}
                   resizeMode="center"
                   style={{
                     width: 50,
                     height: 30
                   }}
                 />
        
           </Block>
         </ColorCard>  

            </Block>

            <Block flex ={true} row space = "between">
            <TouchableOpacity onPress={() =>this.props.navigation.navigate("Fundcard") }
>
                    <Text title semibold blue spacing={1.2}> Fund Card </Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                  onPress={() =>this.props.navigation.navigate("Transfer") }
 >
                    <Text title semibold blue spacing={1.2}> Transfer Back </Text>
                  </TouchableOpacity>
             </Block>


             <Block color="gray3" style={styles.hLine} />

             <Block style = {{marginTop: 20}} center  flex={false} row  >

              <Text h3 bold center>
                Send to recipient bank
              </Text>
              </Block>
              <Block>


            <TouchableOpacity 
            onPress = {() => this.props.navigation.navigate("AddRecipient")}>
            <Card middle shadow style={styles.smallcards}>
                <Text medium height={20} >
                  Add New Recipient
                </Text>

              
            </Card>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress = {() => this.props.navigation.navigate("ExistingRec")}>
            <Card middle shadow style={styles.smallcards}>
                <Text medium height={20} >
                  Use Exisiting Recipient
                </Text>  
            </Card>
            </TouchableOpacity>
              </Block>
          


              
        </ScrollView>

        
        </React.Fragment>



        );
    }



}

Activate.defaultProps = {
  Icons: mocks.Icons
};

const styles = StyleSheet.create({
    header: {
      paddingHorizontal: theme.sizes.base * 2
    },
    welcome: {
      paddingVertical: theme.sizes.padding,
      paddingHorizontal: theme.sizes.padding,
      backgroundColor: theme.colors.gray4
    },
 // horizontal line
 hLine: {
  marginVertical: theme.sizes.base * 2,
  marginHorizontal: theme.sizes.base * 2,
  height: 1,
},

smallcards: {
//  minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  //maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  maxHeight: (width - theme.sizes.padding * 3.4 - theme.sizes.base) / 2
},
   /* cardContainer: {},
    cardFace: {},
    icon: {
      position: "absolute",
      top: 15,
      right: 15,
      width: 60,
      height: 40,
      resizeMode: "contain",
    },
    baseText: {
      color: "rgba(255, 255, 255, 0.8)",
      backgroundColor: "transparent",
    },
    placeholder: {
      color: "rgba(255, 255, 255, 0.5)",
    },
    focused: {
      fontWeight: "bold",
      color: "rgba(255, 255, 255, 1)",
    },
    number: {
      fontSize: 21,
      position: "absolute",
      top: 95,
      left: 28,
    },
    name: {
      fontSize: 16,
      position: "absolute",
      bottom: 20,
      left: 25,
      right: 100,
    },
    expiryLabel: {
      fontSize: 9,
      position: "absolute",
      bottom: 40,
      left: 218,
    },
    expiry: {
      fontSize: 16,
      position: "absolute",
      bottom: 20,
      left: 220,
    },
    amexCVC: {
      fontSize: 16,
      position: "absolute",
      top: 73,
      right: 30,
    },
    cvc: {
      fontSize: 16,
      position: "absolute",
      top: 80,
      right: 30,
    },
  */  
  });




 