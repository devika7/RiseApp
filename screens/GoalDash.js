import React, {Component} from "react";
import {Dimensions,  Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {  Button, Block, Text,Card } from "../components";
import { theme, mocks } from "../constants";
import Slider from "react-native-slider";

const { width } = Dimensions.get("window");

export default class GoalDash extends Component{

    state = {
        goalamount: 8000,
        monthly: 100,
        notifications: true,
        goalimage: this.props.navigation.state.params.thisimage,
        goalname: this.props.navigation.state.params.thisgoal,
        tamount:this.props.navigation.state.params.targetamount,
        frequency1: this.props.navigation.state.params.frequency,
        freqamount: this.props.navigation.state.params.frequencyamount,
        maturity1:this.props.navigation.state.params.maturity,

      };
    

    render()
    {

        return(

            
     <Block style ={styles.welcome}>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h2 bold>
            Dashboard
          </Text> 
           </Block>
            <ScrollView>
           <Block>

            <Card shadow style={{ paddingVertical: theme.sizes.padding }}
             >
         <Block flex = {true} row space ="between ">       
        <Text h3 bold > {this.state.goalname}</Text>
      
           <Image
                      source={this.state.goalimage}
                      resizeMode="center"
                      style={{
                        width: 30,
                        height: 30                }}
                    />
                </Block>
                <Block flex ={true} row>
 <Text  > Target goal amount</Text>
<Text > {this.state.tamount} </Text>
        
</Block>
        <Block style={styles.sliders}>
                <Block // margin={[10, 0]}
             >
             <Text gray2 style={{ marginBottom: 10 }}>
                 Target Goal
                </Text>
             <Slider
              minimumValue={0}
              maximumValue={20000}
              style={{ height: 19 }}
              thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
             minimumTrackTintColor={theme.colors.secondary}
             maximumTrackTintColor={theme.colors.green}
             value={this.state.goalamount}
             onValueChange={value => this.setState({ goalamount: value })}
         />
             <Text gray right>
              {this.state.tamount}
             </Text>
       
         </Block>
        <Block //margin={[10, 0]}
            >
            <Text gray2 style={{ marginBottom: 10 }}>
           Monthly Amount
         </Text>
         <Slider
              minimumValue={0}
           maximumValue={500}
               style={{ height: 19 }}
               thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor={theme.colors.green}
           value={this.state.monthly}
              onValueChange={value => this.setState({ monthly: value })}
          />
                <Text caption gray right>
                  {this.state.freqamount}
                </Text>
        </Block>
        </Block>
        <Block flex = {true} row  space = "between">
            <Button
            style={{ marginBottom: 12 }}


onPress={() =>this.props.navigation.navigate("GoalOverview") }
>
<Text> Add goals </Text>
            </Button>


            <Button
            style={{ marginBottom: 12 }}


onPress={() =>this.props.navigation.navigate("SetGoal") }
>
<Text> Edit goal </Text>
            </Button>
        </Block>
            </Card>
        
       

           </Block>


            
    

        </ScrollView>

            </Block>
            
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
      },
    
   
    sliders: {
      marginTop: theme.sizes.base * 0.7,
      paddingHorizontal: theme.sizes.base * 2
    },
    

  });