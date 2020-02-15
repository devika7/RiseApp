import React from 'react';
import { StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Block, Text, Card, Badge, Button } from '../components';
import axios from 'axios';
import { theme } from '../constants';

const { width } = Dimensions.get("window");

export default class ProfileScreen extends React.Component {


    state = {
        loading: true,
        userdetailsloading: true,
        Users: [],
        UserAccount: [],
        UserProfile: []

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
                    UserAccount: responseJson.Account,
                    UserProfile: responseJson.Profile


                },
                )
            }).catch(error => console.log(error))
    }

    onLogoutButtonPress = () => {
        fetch('http://127.0.0.1:8000/accounts/auth/logout', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${axios.defaults.headers.common.Authorization}`
            }
        }).catch(error => console.log(error))
            .then(this.props.navigation.navigate('Login'))


    }

    componentDidMount() {
        this.getUserDetails();
    }




    renderUserDetails() {

        return (
            <React.Fragment>
                <Card>
                    <Block left style={{ marginTop: 7 }}>

                        <Text blue left h3 medium>
                            Personal Information
                </Text>
                    </Block>

                    <Block style={{ marginTop: 4 }} >

                        {this.state.UserAccount.map(account =>

                            <Block flex key={account.email}>

                                <Text spacing={0.7} title black > Firstname:  {account.first_name} </Text>
                                <Text spacing={0.7} title black  > Lastname:  {account.last_name}</Text>
                                <Text spacing={0.7} title black  > Email:  {account.email}</Text>

                            </Block>


                        )}
                    </Block>
                    <Block>
                        {this.state.UserProfile.map(profile =>

                            <Block flex column key={profile.primaryPhone} >

                                <Text spacing={0.7} title black> Address:  {profile.address1}</Text>
                                <Text spacing={0.7} title black>                 {profile.address2}</Text>
                                <Text spacing={0.7} title black> City:  {profile.city}</Text>
                                <Text spacing={0.7} title black> State:  {profile.state}</Text>
                                <Text spacing={0.7} title black> Zipcode:  {profile.postalCode}</Text>
                            </Block>


                        )}

                    </Block>
                </Card>

            </React.Fragment>
        )
    }

    renderReferFriend() {
        return (

            <React.Fragment>
                <Card>
                    <Block left style={{ marginTop: 7 }}>
                        <Text h3 blue medium> Refer a friend </Text>
                    </Block>
                </Card>
            </React.Fragment>
        )
    }


    render() {
        return (
            <React.Fragment>
                <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false} >
                    <Block left style={{ marginTop: 15 }} >

                        {this.renderUserDetails()}
                    </Block>

                    <Block>
                        {this.renderReferFriend()}
                    </Block>
                    <Block>

                        <Button

                            style={{ marginTop: 30 }}
                            onPress={() => this.onLogoutButtonPress()}
                        >
                            <Text button> Logout </Text>

                        </Button>
                    </Block>
                </ScrollView>
            </React.Fragment>
        );
    }
}

ProfileScreen.navigationOptions = {


    headerLeft: <Text spacing={0.7} style={theme.fonts.header}> Settings </Text>,
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
    full: {
        width: width - 10,
    },

});