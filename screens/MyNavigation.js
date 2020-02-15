import React from 'react';
import SignupScreen1 from "./SignupScreen1";
import SignupScreen2 from "./SignupScreen2";
import SignupScreen3 from "./SignupScreen3";
import Reset from "./Reset";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import ConfirmSignupScreen from './ConfirmSignupScreen';
import PlaidModule from './PlaidModule';


export const MyNavigation = createStackNavigator(
    {

        Welcome: {
            screen: WelcomeScreen,
        },

        Signup: {
            screen: createStackNavigator(
                {
                    Signup1: {
                        screen: SignupScreen1,
                    },

                    Signup2:
                    {
                        screen: SignupScreen2,
                    },
                    Signup3:
                    {
                        screen: SignupScreen3,
                    },
                    ConfirmSignup:
                    {
                        screen: ConfirmSignupScreen,
                    },
                    ConnectBank:
                    {
                        screen: PlaidModule
                    }
                },
            )


        },
        Login: {

            screen: LoginScreen,
        },

        Reset: {
            screen: Reset,
        },

        MainTabNavigator: {
            screen: createBottomTabNavigator(
                {

                    Home: {

                        screen: createStackNavigator(
                            {
                                Themes: {
                                    screen: HomeScreen,
                                },

                            },



                        )
                    },

                    Explore: {
                        screen: createStackNavigator(
                            {
                                Overview: {
                                    screen: ExploreScreen,

                                },


                            },


                        )

                    },

                    Settings: {
                        screen: createStackNavigator(
                            {
                                Settings: {
                                    screen: ProfileScreen,
                                }
                            },
                        )
                    },




                },
                {
                    //tabBarPosition: 'bottom',
                    navigationOptions: ({ navigation }) => ({
                        tabBarIcon: ({ tintColor }) => {
                            const { routeName } = navigation.state;
                            let IconComponent = Ionicons;
                            let iconName;
                            if (routeName === 'Home') {
                                iconName = "search";

                            } else if (routeName === 'Explore') {
                                iconName = "search";
                            }
                            else if (routeName === 'Profile') {
                                iconName = "contact";

                            }

                            // You can return any component that you like here!
                            return <IconComponent name={iconName} size={25} color={tintColor} />;
                        },
                    }),
                    tabBarOptions: {
                        activeTintColor: 'green',
                        inactiveTintColor: 'gray',
                        showIcon: true
                    },

                }
            )
        }
    },
    {
        headerMode: 'none',

    }
);

export default MyNavigation;