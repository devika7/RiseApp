import React from 'react';
import SignupScreen1 from "./SignupScreen1";
import SignupScreen2 from "./SignupScreen2";
import SignupScreen3 from "./SignupScreen3";
import Reset from "./Reset";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import ConfirmSignupScreen from './ConfirmSignupScreen';
import NewPlaid from './NewPlaid';
import AddRecipient from './AddRecipient';
import ExistingRec from './ExistingRec';
import GoalIntro from './GoalIntro';
import GoalSetting from './GoalSetting';
import GoalDash from'./GoalDash';
import Activate from './Activate';
import Fundcard from './Fundcard';
import Transferback from './Transferback';
import SendMoney from './SendMoney';
import Tabbar from './Tabbar';
import Icon from '../components/icons';


import { Image } from "react-native";


import { theme} from "../constants";



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



                        ),
                        NavigationOptions: {
                            tabBarIcon: ({tintColor}) => <Icon name="Home" color={tintColor} />,
                          },
                    },

                   
                    

                    Explore: {
                        screen: createStackNavigator(
                            {
                                Overview: {
                                    screen: ExploreScreen,

                                },

                                GoalOverview:
                                {
                                    screen: GoalIntro,
                                    tabBarOptions: {
                                        tabBarVisible: false,
                                    }
                                },

                                SetGoal:
                                {
                                    screen: GoalSetting,
                                },

                                GoalDashboard:
                                {
                                    screen: GoalDash,
                                },

                                AddRecipient: {
                                    screen: AddRecipient,
                                },

                                ExistingRec:
                                {
                                    screen: ExistingRec,
                                },

                                RemitView:
                                {
                                    screen: Activate,
                                },
                                Fundcard:
                                {
                                    screen: Fundcard,
                                },

                                Transfer:
                                {
                                    screen:Transferback,
                                },

                                SendMoney:
                                {
                                    screen: SendMoney,
                                }
                        

                            },


                        ),

                        navigationOptions: {
                            tabBarIcon: ({tintColor}) => <Icon name="Explore" color={tintColor} />,
                          },

                    },

                    Settings: {
                        screen: createStackNavigator(
                            {
                                Settings: {
                                    screen: ProfileScreen,
                                },

                             ConnectBank: {
                                   screen: NewPlaid,
                            }
                            },
                        ),
                        navigationOptions: {
                            tabBarIcon: ({tintColor}) => <Icon name="Settings" color={tintColor} />,
                          },
                    },




                
                },
                {

                    //tabBarPosition: 'bottom',
                    navigationOptions: ({ navigation }) => ({
                     /*   tabBarIcon: ({ tintColor }) => {
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
                   */
                  tabBarComponent: Tabbar ,
                  tabBarOptions: {
                    activeTintColor: '#2FC7FF',
                    inactiveTintColor: '#C5C5C5',
                  },
                        headerStyle: {
                            height: theme.sizes.base * 4,
                            backgroundColor: theme.colors.white, // or 'white
                            borderBottomColor: "transparent",
                            elevation: 0 // for android
                          },
                          headerBackImage: <Image source={require("../assets/images/back.png")} />,
                          headerBackTitle: null,
                          headerLeftContainerStyle: {
                            alignItems: "center",
                            marginLeft: theme.sizes.base * 2,
                            paddingRight: theme.sizes.base
                          },
                          headerRightContainerStyle: {
                            alignItems: "center",
                            paddingRight: theme.sizes.base
                          } }),
                    
                         
                }
            )
        }
    },
    {
        headerMode: 'none',

    },

);

export default MyNavigation;