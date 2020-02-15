import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Block, Card } from '../components';
import { images, theme } from '../constants';
const { background } = images;

export default class ExploreScreen extends React.Component {

  render() {

    // used to make the card with lesser width 
    //

    return (
      <React.Fragment>
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false} >
          <TouchableOpacity
            activeOpacity={0.8}
          // onPress={() => navigation.navigate("Rewards")}
          >
            <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
              <Block>
                <Block left style={{ marginBottom: 10 }} >
                  <Text h3 black semibold spacing={0.7} style={{ marginBottom: 4 }}> Transfer Money </Text>
                </Block>

                <Block center>
                  <Image
                    source={background.transfer}
                    resizeMode="center"
                    style={{
                      width: 100,
                      height: 100
                    }}
                  />

                </Block>
                <Block center style={{ marginBottom: 6 }}>

                  <Text size={14} spacing={0.4} style={{ marginBottom: 4 }} > One step easy money transfer back home, earn perks for the money you send home</Text>




                  <TouchableOpacity>
                    <Text title semibold blue spacing={1.2}> Send money home </Text>
                  </TouchableOpacity>

                </Block>


              </Block>
            </Card>
          </TouchableOpacity>




          <TouchableOpacity
            activeOpacity={0.8}>
            <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
              <Block>
                <Block left style={{ marginBottom: 10 }} >
                  <Text h3 black semibold spacing={0.7}> Get Emergency Funds </Text>
                </Block>
                <Block center>
                  <Image
                    source={background.funds}
                    resizeMode="center"
                    style={{
                      width: 100,
                      height: 100
                    }}
                  />
                </Block>
                <Block center style={{ marginBottom: 6 }} >

                  <Text size={14} spacing={0.4} style={{ marginBottom: 4 }}> We know emergency costs for moving, travel, medical arise.
                Take emergency funds from us with deferred interest. Pay when you can!
                </Text>

                  <TouchableOpacity>
                    <Text title semibold blue spacing={1.2}> Get Funds </Text>
                  </TouchableOpacity>

                </Block>
              </Block>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}>
            <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
              <Block>
                <Block left style={{ marginBottom: 10 }}>
                  <Text h3 black semibold spacing={0.7}> Offers, crafted for you </Text>
                </Block>
                <Block center>
                  <Image
                    source={background.offers}
                    resizeMode="center"
                    style={{
                      width: 100,
                      height: 100
                    }}
                  />
                </Block>



                <Block center style={{ marginBottom: 6 }} >

                  <Text size={14} spacing={0.4} style={{ marginBottom: 4 }}> We have crafted offers which are best fitted for immigrant spending habits. Banking that earns you money!
                </Text>

                  <TouchableOpacity>
                    <Text title semibold blue spacing={1.2}> See my offers </Text>
                  </TouchableOpacity>

                </Block>
              </Block>
            </Card>
          </TouchableOpacity>
        </ScrollView>
      </React.Fragment>


    );
  }
}




ExploreScreen.navigationOptions = {
  headerLeft: <Text spacing={0.7} style={theme.fonts.header}> Explore</Text>,

  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: 'transparent'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  hLine: {
    marginVertical: theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base * 2,
    height: 1,
  },
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
  },
});
