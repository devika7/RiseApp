import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons';
import { Block, Text, Badge, Card } from "../components";
import { styles as blockStyles } from '../components/Block';
import { styles as cardStyles } from '../components/Card';
import { theme } from '../constants';
const { width } = Dimensions.get('window');
import axios from 'axios';

import rgba from 'hex-to-rgba';


export default class HomeScreen extends React.Component {

  state = {
    balance: '',
    loading: 'true',
    transactionloading: 'true',
    transactions: [],
    userAccount: [],
    userdetailsloading: 'true'

  }

  getBalance = () => {
    fetch('http://127.0.0.1:8000/banking/auth/getbalance', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${axios.defaults.headers.common.Authorization}`
      }

    }).then(response => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          balance: responseJson

        })
      }).catch(error => console.log(error))
  }

  getUserDetails = () => {
    fetch('http://127.0.0.1:8000/accounts/auth/userprofile', {
      method: "GET",
      headers: {

        'Content-Type': 'application/json',
        'Authorization': `${axios.defaults.headers.common.Authorization}`
      }

    }).then(response => response.json())
      .then((responseJson) => {
        this.setState({
          userdetailsloading: false,
          // UserAccount: responseJson.Account,
          UserProfile: responseJson.Profile

        },
          console.log(responseJson))
      }).catch(error => console.log(error))
  }

  getTransactions = () => {
    fetch('http://127.0.0.1:8000/banking/auth/gettransactions', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${axios.defaults.headers.common.Authorization}`
      },
      body: JSON.stringify({
        "startDate": "2019-04-01",
        "endDate": "2019-11-28"
      })

    }).then(response => response.json())
      .then((responseJson) => {
        this.setState({
          transactionloading: false,
          transactions: responseJson.authorizations

        }
        )
      }).catch(error => console.log(error))
  }

  getUserName = () => {
    fetch('http://127.0.0.1:8000/accounts/auth/userprofile', {
      method: "GET",
      headers: {

        'Content-Type': 'application/json',
        'Authorization': `${axios.defaults.headers.common.Authorization}`
      }

    }).then(response => response.json())
      .then((responseJson) => {
        this.setState({
          userdetailsloading: false,
          userAccount: responseJson.Account


        },
        )
      }).catch(error => console.log(error))
  }



  componentDidMount() {
    this.getUserName();
    this.getBalance();
    this.getTransactions();

  }


  renderWelcome() {
    return (

      <LinearGradient
        end={{ x: 1, y: 0 }}
        style={[blockStyles.row, styles.banks]}
        colors={["#2E5BFF", "#2E5BFF"]}
      >
        <Block left style={{ marginTop: 8 }} >

          {this.state.userAccount.map(account =>

            <Block flex key={account.email}>

              <Text spacing={0.7} title semibold white > Welcome to Rise,{account.first_name}! </Text>
            </Block>


          )}
        </Block>
      </LinearGradient>

    )
  }


  renderBalance(balance) {
    const { navigation } = this.props;


    return (
      <TouchableOpacity
        activeOpacity={0.8}
      // onPress={() => navigation.navigate("Rewards")}
      >
        <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
          <Block>
            <Block center>
              <Text spacing={0.7}>Your Current Balance</Text>

              <TouchableOpacity>
                <Text h1 semibold blue spacing={1.7}> {this.state.balance}</Text>
              </TouchableOpacity>

            </Block>

            <Block color="gray3" style={styles.hLine} />

            <Block row>
              <Block center>
                <Text size={20} spacing={0.6} blue style={{ marginBottom: 6 }}>$150</Text>
                <Text body spacing={0.7}>Today's Spending</Text>
                <Text body spacing={0.7}>Amount</Text>
              </Block>



              <Block flex={false} color="gray3" style={styles.vLine} />

              <Block center>
                <Text size={20} spacing={0.6} blue style={{ marginBottom: 6 }}> $4500</Text>
                <Text body spacing={0.7}> Monthly</Text>
                <Text body spacing={0.7}> Deposit </Text>
              </Block>
            </Block>
          </Block>
        </Card>
      </TouchableOpacity>
    )
  }


  renderConnectedBank() {
    return (
      <Block>



        <LinearGradient
          end={{ x: 1, y: 0 }}
          style={[blockStyles.row, cardStyles.card, styles.banks]}
          colors={["#3c8aeb", theme.colors.accent]}
        >
          <Block middle>
            <Text size={theme.sizes.base} spacing={0.4} medium white> Connected Bank </Text>
            <Text size={theme.sizes.base} spacing={0.4} medium white> Chase College account </Text>
          </Block>
        </LinearGradient>
      </Block>
    )

  }


  renderTransactions() {

    return (
      <React.Fragment>
        <Block style={{ marginBottom: theme.sizes.base }}>
          <Text spacing={0.4}>
            Recent Transactions
          </Text>
        </Block>

        {this.state.transactions.map(transaction =>
          <Card key={transaction.auth_id}>
            <Block row space="between" style={{ marginBottom: theme.sizes.base }}>
              <Badge color={rgba(theme.colors.accent, '0.2')} size={14} style={{ marginRight: 8 }}>
                <Badge color={theme.colors.accent} size={8} />
              </Badge>
              <Text spacing={0.5} caption>{transaction.details_formatted}</Text>
            </Block>
            <Block row center>

              <Text spacing={0.5} color="black">{transaction.amount}</Text>
            </Block>
            <Block row center style={{ paddingVertical: 4 }}>
              <Badge color="gray2" size={4} style={{ marginLeft: 4.5 }} />
            </Block>

            <Block row center>

              <Text spacing={0.5} color="gray">{transaction.timestamp}</Text>
            </Block>
          </Card>
        )}
      </React.Fragment>
    )
  }


  render() {



    return (

      <React.Fragment>
        <ScrollView>
          {this.renderWelcome()}
          <Block style={styles.welcome} showsVerticalScrollIndicator={false}>

            {this.renderBalance()}
            {this.renderTransactions()}


          </Block>
        </ScrollView>
      </React.Fragment>


    );
  }
}

HomeScreen.navigationOptions = {
  headerLeft: <Text title spacing={0.7} style={theme.fonts.header}> Rise</Text>,

  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: 'transparent'
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },

  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  // horizontal line
  hLine: {
    marginVertical: theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base * 2,
    height: 1,
  },
  // vertical line
  vLine: {
    marginVertical: theme.sizes.base / 2,
    width: 1,
  },
  banks: {
    padding: theme.sizes.base,
    marginBottom: theme.sizes.padding,
  },

});


// <Badge color={rgba(theme.colors.primary, '0.2')} size={14} style={{ marginRight: 8 }}>
//<Badge color={theme.colors.primary} size={8} />  
//</Badge>

//<LinearGradient
//colors={['#130f5c', '#2e5bff', '#40a0f6']}
//style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>