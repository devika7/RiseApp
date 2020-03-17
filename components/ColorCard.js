import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Block from './Block';
import { theme } from '../constants';

const background = require("../assets/images/CCback.png");

export default class ColorCard extends Component {
    render() {
        const { color, style, children, ...props } = this.props;
        const cardStyles = [
            styles.card,
            style,
        ];

        return (
            
            <Block color={color || theme.colors.lightblue} style={cardStyles} {...props}>
                {children}
            </Block>
            
        
        )
    }
}

export const styles = StyleSheet.create({
    card: {
        borderRadius: theme.sizes.border,
        padding: theme.sizes.base + 4,
        marginBottom: theme.sizes.base,
      
        
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOpacity: 0.11,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 13,
    },

    

})