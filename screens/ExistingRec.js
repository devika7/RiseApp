import React from "react";
import { StyleSheet, ScrollView , TouchableOpacity, View,
     Dimensions,

    Platform,
    

} from "react-native";
import { Block, Text, Button, Card } from '../components';
import {theme, mocks} from '../constants';

const { width } = Dimensions.get("window");




export default class ExistingRec extends React.Component{

    state = {
        Recipients: [],
      };

      componentDidMount() {
        this.setState({ Recipients: this.props.Recipients });
    
      }


    render(){

        const { Recipients } = this.state;


        return(
            <React.Fragment>
            
    
            <ScrollView
             style={styles.welcome} showsVerticalScrollIndicator={false}
            >
                <Block flex={false} row center space="between" style={styles.header}>
              <Text h3 bold>
             Recipients
              </Text>
            </Block>
              <Block center >
                {Recipients.map(Recipient => (
                  <TouchableOpacity
                    key={Recipient.Rfname}
                   onPress={() => this.props.navigation.navigate("SendMoney")}
                  >
                    <Card left middle shadow style={styles.smallcards}>
                    <Block flex = {true} row >
                      <Text h3 medium >
                        {Recipient.Rfname}  {Recipient.Rlname}
                      </Text>
        
                      </Block>
                    </Card>
                  </TouchableOpacity>
                ))}
              </Block>
            </ScrollView>
          </React.Fragment>
        );

    }






}

ExistingRec.defaultProps = {
    Recipients: mocks.Recipients
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
   
  smallcards: {
   minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) ,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base),
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base)


  },


  })

