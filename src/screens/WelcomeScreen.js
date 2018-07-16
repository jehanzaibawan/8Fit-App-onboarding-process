import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Animated,
  ImageBackground
} from 'react-native';
import { globalStyles as styles } from '../styles/globalStyles';
import BoxShapeXXLButton from '../components/BoxShapeXXLButton'
import * as helper from '../helpers/helpers'

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    let screenHeight = Dimensions.get('screen').height; // get height of the screen
    let posLogoCenter = helper.obtainCenter(screenHeight, 44); // obtain center position for the logo

    this.state = {
      efLogoTranslate: new Animated.Value(posLogoCenter), // for logo
      efLogoScale: new Animated.Value(2),

      leftImgOpacityValue: new Animated.Value(0), // for left image(beans)
      leftImgTranslate: new Animated.Value(-20),

      rightImgOpacityValue: new Animated.Value(0), // for right image(dumbbell)
      rightImgTranslate: new Animated.Value(20),

      contentsOpacityValue: new Animated.Value(0), // for contents(titlem heading, buttons)
      contentsTranslate: new Animated.Value(20),

      dynamicTopValue: helper.obtainCenter(screenHeight, 533), // centers beans image
    };

    Dimensions.addEventListener('change', () => { // listen for device orientation(Dimensions) changes
      let screenHeight = Dimensions.get('screen').height; // get height of the screen
      this.setState({ dynamicTopValue: helper.obtainCenter(screenHeight, 533) }); // centers beans image
    });
  }

  componentDidMount() {
    this._triggerAnimation();
  }

  _triggerAnimation = () => {
    const efLogoAninmation = Animated.parallel([ // EF logo animation
      Animated.timing(this.state.efLogoTranslate, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(this.state.efLogoScale, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000
      })
    ]);

    const leftImgAnimation = Animated.parallel([ // left image(beans) animation
      Animated.timing(this.state.leftImgOpacityValue, {
        useNativeDriver: true,
        toValue: 1,
        duration: 800
      }),
      Animated.timing(this.state.leftImgTranslate, {
        useNativeDriver: true,
        toValue: 0,
        duration: 800
      }),
    ]);

    const rightImgAnimation = Animated.parallel([ // right image(dumbell) animation
      Animated.timing(this.state.rightImgOpacityValue, {
        useNativeDriver: true,
        toValue: 1,
        duration: 400
      }),
      Animated.timing(this.state.rightImgTranslate, {
        useNativeDriver: true,
        toValue: 0,
        duration: 400
      }),
    ]);

    const contentsAnimation = Animated.parallel([ // contents(titlem heading, buttons) animation
      Animated.timing(this.state.contentsOpacityValue, {
        useNativeDriver: true,
        toValue: 1,
        duration: 400
      }),
      Animated.timing(this.state.contentsTranslate, {
        useNativeDriver: true,
        toValue: 0,
        duration: 400
      }),
    ]);

    setTimeout(() => {
      Animated.stagger(500,
        [
          efLogoAninmation,
          leftImgAnimation,
          rightImgAnimation,
          contentsAnimation,
        ]
      ).start();
    },
      0);
  }

  _navigateToAgeScreen = (goal) => {
    let navParams = { fitnessGoal: goal };
    this.props.navigation.navigate('AgeScreen', navParams);
  }

  render() {
    const efLogoAnimationStyle = { // logo animation style
      transform: [
        {
          translateY: this.state.efLogoTranslate
        },
        {
          scale: this.state.efLogoScale
        }
      ]
    };

    const leftImgAnimationStyle = { // left image animation style
      opacity: this.state.leftImgOpacityValue,
      transform: [{
        translateX: this.state.leftImgTranslate
      }]
    };

    const rightImgAnimationStyle = { // right image animation style
      opacity: this.state.rightImgOpacityValue,
      transform: [{
        translateX: this.state.rightImgTranslate
      }]
    };

    const contentsAnimationStyle = { // contents(titlem heading, buttons) animation style
      opacity: this.state.contentsOpacityValue,
      transform: [{
        translateY: this.state.contentsTranslate
      }]
    };

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroudImage} source={require('../images/backgroundGrain.png')}>
          <Animated.Image
            style={[
              styles.logo,
              efLogoAnimationStyle
            ]}
            source={require('../images/icon8Logo.png')}
          />
          <Animated.Text style={[styles.welcomeText, contentsAnimationStyle]}>WELCOME TO 8 FIT</Animated.Text>
          <Animated.Text style={[styles.heading,
          { marginTop: 20 /*override*/ },
            contentsAnimationStyle
          ]}>
            What's your goal?
          </Animated.Text>
          <Animated.Image
            style={[styles.leftBeansImage,
            { top: this.state.dynamicTopValue }, // centers beans image
              leftImgAnimationStyle
            ]}
            source={require('../images/imgBeans.png')}
          />
          <Animated.Image
            style={[styles.rightDumbbellImage,
              rightImgAnimationStyle
            ]}
            source={require('../images/imgDumbbellOnMat.png')}
          />
          <Animated.ScrollView style={[styles.goalsContainer, contentsAnimationStyle]}>
            <BoxShapeXXLButton
              heading="Lose weight"
              description="Burn fat and get lean"
              cbOnPress={() => this._navigateToAgeScreen('Loose weight')} />

            <BoxShapeXXLButton
              heading="Get fitter"
              description="Tone up and feel healthy"
              cbOnPress={() => this._navigateToAgeScreen('Get fitter')} />

            <BoxShapeXXLButton
              heading="Gain muscle"
              description="Build mass and strength"
              cbOnPress={() => this._navigateToAgeScreen('Gain muscle')} />
          </Animated.ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
