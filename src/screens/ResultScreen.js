import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { StackActions } from 'react-navigation';
import { globalStyles as styles } from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';
import * as helper from '../helpers/helpers';

const ResultScreen = (props) => {
  const _navigateToTop = () => {
    props.navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View style={styles.container}>
      <View style={[styles.stageIndicator, styles.stage2]}></View>
      <Text style={styles.heading}>
        Summary!
      </Text>
      <View style={styles.centerContent}>
        <Text style={styles.resultText}>
          Your fitness goal is to <Text style={styles.resultValue}>{props.navigation.getParam('fitnessGoal')}</Text>,
        </Text>
        <Text style={styles.resultText}>
          you are <Text style={styles.resultValue}>{helper.removeInitialZeros(props.navigation.getParam('ageValue'))} years</Text> old
        </Text>
        <Text style={styles.resultText}>
          and
        </Text>
        <Text
          style={[
            styles.resultText,
            props.navigation.getParam('selectedUnit') === 'CM' ? null : styles.hidden]}
        >
          your height is <Text style={styles.resultValue}>{helper.removeInitialZeros(props.navigation.getParam('cmValue'))} Cm</Text>
        </Text>
        <View style={props.navigation.getParam('selectedUnit') === 'FT' ? null : styles.hidden}>
          <Text style={styles.resultText}>
            your height is <Text style={styles.resultValue}>{helper.removeInitialZeros(props.navigation.getParam('ftValue'))} Ft</Text>
            {' '}and{' '}
            <Text style={styles.resultValue}>{helper.removeInitialZeros(props.navigation.getParam('incValue'))} In</Text>
          </Text>
        </View>
      </View>
      <CustomButton
        title="Confirm"
        cbOnPress={_navigateToTop} />
    </View >
  );
}

export default ResultScreen;
