import React from "react";
import { Dimensions,  Image,  StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import { Card, Badge, Button, Block, Text } from "../components";
import { theme , mocks} from "../constants";


const { width } = Dimensions.get("window");


export default class GoalIntro extends React.Component{

    state = {
        goals: [],
      };
    
      componentDidMount() {
        this.setState({ goals: this.props.goals });
    
      }

    
    

    render(){

        const { goals } = this.state;

        return(


            <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h3 bold>
         Choose your goal
          </Text>
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          <Block flex={false} row space="between" style={styles.goals}>
            {goals.map(goal => (
              <TouchableOpacity
                key={goal.name}
               onPress={() => this.props.navigation.navigate("SetGoal", { mygoal:goal} )}
              >
                <Card center middle shadow style={styles.goal}>
                  <Badge
                    //margin={[0, 0, 15]}
                    size={50}
                    color="white"
                  >
                    <Image source={goal.image} />
                  </Badge>
                  <Text medium height={20}>
                    {goal.name}
                  </Text>
                  
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
            
        );

    }

}

GoalIntro.defaultProps = {
    goals: mocks.goals
  };

  const styles = StyleSheet.create({
    header: {
      paddingHorizontal: theme.sizes.base * 2
    },
    
    goals: {
      flexWrap: "wrap",
      paddingHorizontal: theme.sizes.base * 2,
      marginBottom: theme.sizes.base * 3.5
    },
    goal: {
      // this should be dynamic based on screen width
      minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
      maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
      maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
    }
  });