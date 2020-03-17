import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput, StyleSheet, Dimensions} from 'react-native';
import {theme} from '../constants';

const { width } = Dimensions.get("window");

// import styles

const InputWithButton = (props) => {
    const { onPress, buttonText, editable= true} = props; 

    //const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

    const containerStyles = [styles.container];
    if(editable === false)
    {
        containerStyles.push(styles.containerDisabled);
    }




    return(
<View style = {styles.container}>
<TouchableHighlight 
//underlayColor = {underlayColor} 
style = {styles.buttonContainer} onPress = {onPress}>
    <Text style = {styles.buttonText}>{ buttonText} </Text>
</TouchableHighlight>
<View style = {styles.border}/>
<TextInput style = {styles.input} {...props}/>
</View>
)
};




InputWithButton.propTypes = {

   onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};


export default InputWithButton;


const styles = StyleSheet.create({
//$buttonBackgroundColorBase: theme.colors.lightblue,
//$buttonBackgroundColorModifier: 0.1,

    container: {
      backgroundColor: theme.colors.input,
      width: width - 50,
      borderRadius: 5,
      height: 45,
      flexDirection :'row',
      alignItems:'center',
      marginVertical : 11,

    },

    containerDisabled: {
    backgroundColor: theme.colors.gray2,
},
    buttonContainer:{
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.gray2,
      borderBottomLeftRadius: 5,
      borderTopLeftRadius:5,
    },
  
    
    buttonText:
    {
      fontWeight: "600",
      fontSize: 20,
      paddingHorizontal:16,
      color: theme.colors.blue
     
    },

    input:{
        height: 45,
        flex : 1,
        fontSize: theme.sizes.font,
        borderTopRightRadius: 5,
        paddingHorizontal: 8,
        color: theme.colors.black,
    },

    border: {
      height: 45,
      width: StyleSheet.hairlineWidth,
      backgroundColor: theme.colors.border,
    }
  });
  