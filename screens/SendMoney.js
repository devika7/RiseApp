import React from "react";
import { StyleSheet, ScrollView , TouchableOpacity, View,
    ImageBackground, Dimensions,
    Image,
    Platform,
    

} from "react-native";

import { Block, Text, Card, ColorCard, Input, Button,  } from "../components";
import {theme, mocks} from "../constants";

const { width } = Dimensions.get("window");


export default class SendMoney extends React.Component{


    render(){


        return(

            <Text> Send money</Text>

        );
    }
}