import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


const colors = {
    accent: "#FF4957",
    primary: "#27A9FF",
    secondary: "#4DA1FF",
    tertiary: "#FFE358",
    black: "#2F2F2F",
    white: "#FFFFFF",
    gray: "#BDBFC7",
    gray2: "#D8D8D8",
    gray3: "#F0F0F0",
    gray4: "#F7F8FA",
    blue: '#2E5BFF',
    lightblue: '#486FFF',
    border: '#D6DDF6',
    green: '#99C68E',
    
   // input: 'rgba(224, 231, 255, 0.20)',

    // lightblue: 'rgba(46,92,255,0.2)',
};

const sizes = {
    // global sizes

    border: 15,

    base: 16,
    font: 16,
    radius: 4,
    padding: 24,
    profile: 10,

    // font sizes
    h1: 34,
    h2: 24,
    h3: 20,
    title: 18,
    subtitle: 14,
    caption: 12,
    small: 10,
    header: 24,
    body: 12,


    //app sizes
    width,
    height
};

const fonts = {
    h1: {
        fontFamily: "Nunito-Light",
        fontSize: sizes.h1
    },
    h2: {
        fontFamily: "Nunito-SemiBold",
        fontSize: sizes.h2
    },
    h3: {
        fontFamily: "Nunito-Regular",
        fontSize: sizes.h3
    },
    header: {
        fontFamily: "Nunito-Bold",
        fontSize: sizes.header
    },
    title: {
        fontFamily: "Nunito-Regular",
        fontSize: sizes.title
    },
    body: {
        fontSize: sizes.body
    },
    caption: {
        fontSize: sizes.caption
    },
    small: {
        fontSize: sizes.small
    }
};

export { colors, sizes, fonts };