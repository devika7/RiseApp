import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
Alert
} from "react-native";

import { Card, Badge, Button, Block, Text, Input } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

export default class GoalSetting extends React.Component {
  state = {
    targetamount: '',
    frequency: '',
    frequencyamount: '',
    maturity:'',
    goal: this.props.navigation.state.params.mygoal
  };               

  onSetGoal= ()=> {
    Alert.alert(" Goal Set , Check Dashboard ");
    this.props.navigation.navigate("GoalDashboard",{thisgoal:this.state.goal.name ,thisimage:this.state.goal.image, targetamount:this.state.targetamount, frequency: this.state.frequency,
        frequencyamount:this.state.frequencyamount, maturity:this.state.maturity });
   

 };

  render() {
    const { goal } = this.state;

    return (

        
        <React.Fragment>
             <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
      
          <Block center flex={false} row center  style={styles.header}>
          <Text h2 bold>
         Set your goal
          </Text>
        </Block>
       
            <TouchableOpacity>
              <Card shadow style={{ paddingVertical: theme.sizes.padding }}
              >
                <Block>
                  <Block center style={{ marginBottom: 10 }}>
                    <Text h3 black semibold spacing={0.7}>
                      {" "}
                      {goal.caption}{" "}
                    </Text>
                  </Block>
                  <Block center style={{ marginBottom: 8 }}>
                    <Text size={16} spacing={0.4} style={{ marginBottom:7 }}>
                      {" "}
                      {goal.description}
                    </Text>
                  </Block>
                  <Block center>
                    <Image
                      source={goal.bigimage}
                      resizeMode="center"
                      style={{
                        width: 200,
                        height: 200
                      }}
                    />
                  </Block>

                 
                  <Block>
                  <Input
                    
                        label="Enter target amount"
                        style={{ marginBottom: 7 }}
                        onChangeText={targetamount => this.setState({ targetamount})}
                        value={this.state.targetamount}
                    />
                    <Input
                    
                    label="Frequency"
                    style={{ marginBottom: 7 }}
                    onChangeText={frequency => this.setState({ frequency})}
                    value={this.state.frequency}
                />
                <Input
                    
                    label="Frequency amount"
                    style={{ marginBottom: 7 }}
                    onChangeText={frequencyamount => this.setState({ frequencyamount})}
                    value={this.state.frequencyamount}
                />
                <Input
                    
                    label="Maturity Date"
                    style={{ marginBottom: 7 }}
                    onChangeText={maturity => this.setState({ maturity})}
                    value={this.state.maturity}
                />
                    </Block>

<Block>
<Button
                        
                        style={{ marginBottom: 12 }}


                        onPress={() =>this.onSetGoal() }
                    >
                        <Text button> Set Goal </Text>
                    </Button>
                    </Block>
                </Block>
              </Card>

            </TouchableOpacity>
          
        
    
      </ScrollView>
      </React.Fragment>
      
    );
  }
}



//GoalSetting.defaultProps = {
//  goalspecifics: mocks.goalspecifics
//};



/*GoalSetting.navigationOptions = {

}

*/
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4
  },

  goals: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  }

  // goal: {
  //  this should be dynamic based on screen width
  //   minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  //maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  // maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  //}
});
