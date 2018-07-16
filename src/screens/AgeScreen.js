import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { globalStyles as styles } from '../styles/globalStyles';
import CustomTextBox from '../components/CustomTextBox';
import AlertAnimated from '../components/AlertAnimated';
import CustomButton from '../components/CustomButton';

export default class AgeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disableButton: true
    };
  }

  componentDidMount() {
    setTimeout(
      this.txtBoxSetFocus,
      0
    );
  }

  _navigateToHeight = () => {
    if (this.txtBoxHasValidValue()) {
      let navParams = {
        fitnessGoal: this.props.navigation.getParam("fitnessGoal"),
        ageValue: this.txtBoxGetText()
      };

      this.setShowAlert(false);
      this.props.navigation.navigate('HeightScreen', navParams);
    } else {
      this.setShowAlert(true);
    }
  }

  setShowAlert = (ref) => this.setShowAlert = ref;

  txtBoxSetFocus = (ref) => this.txtBoxSetFocus = ref;
  txtBoxHasIntegerValue = (status) => {
    this.setState({
      disableButton: !status
    });
  }
  txtBoxHasValidValue = (ref) => this.txtBoxHasValidValue = ref;
  txtBoxGetText = (ref) => this.txtBoxGetText = ref;

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.stageIndicator, styles.stage1]}></View>
        <Text style={styles.heading}>
          How old are you?
        </Text>
        <View style={styles.centerContent}>
          <CustomTextBox
            containerStyle={styles.textBoxContainerSingle}
            inlineText="Years"
            maxLength={3}
            minValue={10}
            maxValue={120}
            cbHasIntegerValue={this.txtBoxHasIntegerValue}
            cbHasValidValue={this.txtBoxHasValidValue}
            cbSetFocus={this.txtBoxSetFocus}
            cbGetText={this.txtBoxGetText}
          />
          <AlertAnimated
            type="error"
            message="Age must be between 10 to 120"
            cbShowAlert={this.setShowAlert} />
        </View>
        <CustomButton
          title="Continue"
          disabled={this.state.disableButton}
          cbOnPress={this._navigateToHeight} />
      </View>
    );
  }
}