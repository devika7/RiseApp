import React from 'react';
import { Animated, Image, ScrollView, View, StyleSheet } from 'react-native';
//import theme from '../constants/theme';
import { Block, Text, Button } from '../components';

// constants
import { images, theme } from "../constants";
const { background } = images;


//theme
//const { sizes, colors, fonts } = theme;

const backgrounds = [
    {
        title: "Banking for Immigrants",
        description:
            "A bank that is specially designed to serve the needs of immigrants",
        img: background.welcome
    },
    {
        title: " No Fees. Whatsoever",
        description:
            "Send money back and forth from your home country with NO FEES! You heard that right",
        img: background.credit
    },
    {
        title: "Earn more money",
        description:
            "Through our perks program, you can save up on mobile, gas, internet utilities and so on ",
        img: background.banking
    }
];




export default class WelcomeScreen extends React.Component {

    scrollX = new Animated.Value(0);

    state = {
        slideIndex: 0
    };

    componentDidMount() {
        this.scrollX.addListener(({ value }) => {
            this.setState({ slideIndex: Math.floor(value / theme.sizes.width) });
        });
    }



    renderImages() {
        return (

            <ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: this.scrollX } } }
                ])}
            >
                {backgrounds.map((item, index) => (
                    <Block
                        center
                        bottom
                        key={`img-${index}`}
                        style={{ width: theme.sizes.width }}
                    >
                        <Image
                            source={item.img}
                            resizeMode="center"
                            style={{
                                width: theme.sizes.width / 1.5,
                                height: "100%"
                            }}
                        />
                    </Block>
                ))}
            </ScrollView>

        );
    }

    renderDots() {
        const dotPosition = Animated.divide(this.scrollX, theme.sizes.width);

        return (

            <Block
                flex={false}
                row
                center
                middle
            //margin={[theme.sizes.padding, 0, theme.sizes.padding * 2, 0]}
            >
                {backgrounds.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    return (
                        <Block
                            gray
                            animated
                            flex={false}
                            key={`dot-${index}`}
                            radius={theme.sizes.small}
                            //  margin={[0, theme.sizes.small / 2]}
                            style={[styles.dot, { opacity }]}
                        />
                    );
                })}
            </Block>

        );
    }

    renderTexts() {
        const { slideIndex } = this.state;
        const background = backgrounds[slideIndex];

        return (
            <React.Fragment>
                <Text animated h2 semibold theme={theme}>
                    {background && background.title}
                </Text>
                <Text
                    animated
                    theme={theme}
                    center
                    title
                    gray3
                    margin={[theme.sizes.small, 0]}
                >
                    {background && background.description}
                </Text>

            </React.Fragment>
        );
    }


    render() {
        return (

            <Block safe>
                <Block center middle style={{ marginTop: 60 }} >
                    {this.renderImages()}
                </Block>
                <Block flex={false} center bottom margin={30}>
                    {this.renderTexts()}
                    {this.renderDots()}
                </Block>
                <Block center middle flex={true} column justifyContent="space-around" bottom margin={90}>
                    <Button full center
                        primary
                        theme={theme}
                        onPress={() => this.props.navigation.navigate('Signup')}
                    >

                        <Text
                            center
                            white
                            caption
                            bold
                            margin={[theme.sizes.padding / 2, theme.sizes.padding * 2]}
                        >
                            GET STARTED
                </Text>
                    </Button>

                    <Button full center
                        primary
                        theme={theme}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >

                        <Text
                            center
                            white
                            caption
                            bold
                            margin={[theme.sizes.padding / 2, theme.sizes.padding * 2]}
                        >
                            LOGIN
                              </Text>
                    </Button>
                </Block>

            </Block>
        );
    }

}



const styles = StyleSheet.create({
    dot: { width: theme.sizes.base, height: theme.sizes.base }
});
