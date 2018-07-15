import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { globalStyles as styles } from '../styles/globalStyles';
import CustomTextBox from '../components/CustomTextBox';
import AlertAnimated from '../components/AlertAnimated';
import ToggleButton from '../components/ToggleButton';
import CustomButton from '../components/CustomButton';

export default class HeightScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUnit: "CM",
      disableButton: true
    };
  }

  componentDidMount() {
    setTimeout(
      this.txtBoxCMsetFocus,
      0
    );
  }

  _getSelectedUnit() {
    return this.state.selectedUnit;
  }

  _navigateToResult = () => {
    let params = {
      ageValue: this.props.navigation.getParam('ageValue'),
      selectedUnit: this._getSelectedUnit(),
      cmValue: this.txtBoxCMgetText(),
      ftValue: this.txtBoxFTgetText(),
      incValue: this.txtBoxINCgetText()
    };

    if (this._getSelectedUnit() === "CM") {
      if (this.txtBoxCMhasValidValue()) {
        this.setCMshowAlert(false);
        this.props.navigation.navigate('ResultScreen', params);
      }
      else {
        this.setCMshowAlert(true);
      }
    } else {
      if (this.txtBoxFThasValidValue()) {
        this.setFTshowAlert(false);
        if (this.txtBoxINChasValidValue()) {
          this.setINCshowAlert(false);
          this.props.navigation.navigate('ResultScreen', params);
        }
        else {
          this.setINCshowAlert(true);
        }
      }
      else {
        this.setFTshowAlert(true);
      }
    }
  }

  _actionsOnToggle = (selectedUnit) => {
    if (selectedUnit === "CM") {
      if (this.txtBoxCMgetText().length > 0)
        this.setState({ disableButton: false });
      else
        this.setState({ disableButton: true });

      this.setFTshowAlert(false);
      this.setINCshowAlert(false);

      setTimeout(() => {
        this.txtBoxCMsetFocus();
      }
        ,
        0
      );
    }
    else {
      if (this.txtBoxFTgetText().length > 0 &&
        this.txtBoxINCgetText().length > 0)
        this.setState({ disableButton: false });
      else
        this.setState({ disableButton: true });

      this.setCMshowAlert(false);

      setTimeout(() => {
        this.txtBoxFTsetFocus();
      }
        ,
        0
      );
    }
  }

  setToggleButtonOpt = (selectedUnit) => {
    this._actionsOnToggle(selectedUnit);

    this.setState({ selectedUnit });
  }

  setCMshowAlert = (ref) => this.setCMshowAlert = ref;
  setFTshowAlert = (ref) => this.setFTshowAlert = ref;
  setINCshowAlert = (ref) => this.setINCshowAlert = ref;

  txtBoxCMsetFocus = (ref) => this.txtBoxCMsetFocus = ref;
  txtBoxCMhasIntegerValue = (status) => {
    this.setState({
      disableButton: !status
    });
  }
  txtBoxCMhasValidValue = (ref) => { this.txtBoxCMhasValidValue = ref };
  txtBoxCMgetText = (ref) => { this.txtBoxCMgetText = ref };

  txtBoxFTsetFocus = (ref) => this.txtBoxFTsetFocus = ref;
  txtBoxFThasIntegerValue = (status) => {
    this.setState({
      disableButton: !status
    });
  }
  txtBoxFThasValidValue = (ref) => { this.txtBoxFThasValidValue = ref };
  txtBoxFTgetText = (ref) => { this.txtBoxFTgetText = ref };

  txtBoxINCsetFocus = (ref) => this.txtBoxINCsetFocus = ref;
  txtBoxINChasIntegerValue = (status) => {
    this.setState({
      disableButton: !status
    });
  }
  txtBoxINChasValidValue = (ref) => { this.txtBoxINChasValidValue = ref };
  txtBoxINCgetText = (ref) => { this.txtBoxINCgetText = ref };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.stageIndicator, styles.stage2]}></View>
        <Text style={styles.heading}>
          How tall are you?
        </Text>
        <View style={styles.centerContent}>

          <View style={[styles.inlineContainer, this.state.selectedUnit === "CM" ? null : styles.hidden]}>
            < CustomTextBox
              containerStyle={styles.textBoxContainerSingle}
              inlineText="Cm"
              maxLength={3}
              minValue={125}
              maxValue={301}
              cbHasIntegerValue={this.txtBoxCMhasIntegerValue}
              cbHasValidValue={this.txtBoxCMhasValidValue}
              cbSetFocus={this.txtBoxCMsetFocus}
              cbGetText={this.txtBoxCMgetText}
            />
          </View>

          <View style={[styles.inlineContainer, this.state.selectedUnit === "FT" ? null : styles.hidden]}>
            < CustomTextBox
              containerStyle={styles.textBoxContainerDouble}
              inlineText="Ft"
              maxLength={2}
              minValue={4}
              maxValue={9}
              cbHasIntegerValue={this.txtBoxFThasIntegerValue}
              cbHasValidValue={this.txtBoxFThasValidValue}
              cbSetFocus={this.txtBoxFTsetFocus}
              cbGetText={this.txtBoxFTgetText}
            />
            < CustomTextBox
              containerStyle={styles.textBoxContainerDouble}
              inlineText="In"
              maxLength={2}
              minValue={1}
              maxValue={12}
              cbHasIntegerValue={this.txtBoxINChasIntegerValue}
              cbHasValidValue={this.txtBoxINChasValidValue}
              cbSetFocus={this.txtBoxINCsetFocus}
              cbGetText={this.txtBoxINCgetText}
            />
          </View>
          <AlertAnimated
            type="error"
            message="CM must be between 125 to 301"
            cbShowAlert={this.setCMshowAlert} />
          <AlertAnimated
            type="error"
            message="Feet must be between 4 to 9"
            cbShowAlert={this.setFTshowAlert} />
          <AlertAnimated
            type="error"
            message="Inch must be between 1 to 12"
            cbShowAlert={this.setINCshowAlert} />

          <ToggleButton
            optionLeft="FT"
            optionRight="CM"
            cbToggleAction={this.setToggleButtonOpt}
            selectedOption={this.state.selectedUnit}
          />
        </View>
        <CustomButton
          title="Continue"
          disabled={this.state.disableButton}
          cbOnPress={this._navigateToResult} />
      </View>
    );
  }
}