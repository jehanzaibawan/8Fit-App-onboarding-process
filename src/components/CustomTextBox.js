import React, { Component } from 'react';
import {
    Platform,
    View,
    TextInput,
    Text,
    ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';
import AlertAnimated from './AlertAnimated';
import { globalStyles as styles } from '../styles/globalStyles';

class CustomTextBox extends Component {
    constructor(props) {
        super(props);

        this.state = { text: '' };
    }

    componentDidMount() {
        this.props.cbSetFocus(this._setFocus);
        this.props.cbGetText(this._getText);
        this.props.cbHasValidValue(this._hasValidValue);
    }

    _setFocus = () => {
        this._textField.focus();
    }

    _getText = () => {
        return this.state.text;
    }

    _hasIntegerValue = (text) => { // has some value and not empty also
        text = text.replace(/[^0-9]/g, ''); // replace non integers with ''

        if (text.length > 0)
            this.props.cbHasIntegerValue(true);
        else
            this.props.cbHasIntegerValue(false);

        this.setState({ text });
    }

    _hasValidValue = () => { // between ranges
        let text = this._getText();
        if (text >= this.props.minValue &&
            text <= this.props.maxValue) { // between min and max
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return (
            <View style={this.props.containerStyle}>
                <Text style={styles.inlineText}>{this.props.inlineText}</Text>
                {
                    Platform.OS === 'android' ?
                        <TextInput
                            style={styles.textBox}
                            ref={ref => this._textField = ref}
                            onChangeText={(text) => this._hasIntegerValue(text)}
                            value={this.state.text}
                            maxLength={this.props.maxLength}
                            keyboardType="numeric"
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />
                        :
                        <TextInput
                            style={styles.textBox}
                            ref={ref => this._textField = ref}
                            onChangeText={(text) => this._hasIntegerValue(text)}
                            value={this.state.text}
                            maxLength={this.props.maxLength}
                            keyboardType="numeric"
                        />
                }
            </View>
        );
    }
}

CustomTextBox.defaultProps = {
    inlineText: 'Number'
};

CustomTextBox.propTypes = {
    containerStyle: ViewPropTypes.style,            //applies style to the container, setting width, padding
    inlineText: PropTypes.string,                   //inline text appearing inside textbox to specify unit like 'Cm', 'In' etc
    maxLength: PropTypes.number.isRequired,         //required, max length of the input
    minValue: PropTypes.number.isRequired,          //required, minimum value of the input
    maxValue: PropTypes.number.isRequired,          //required, maximum value of the input
    cbHasIntegerValue: PropTypes.func.isRequired,   //required, sets callback to acknowledge if input is valid integer
    cbHasValidValue: PropTypes.func.isRequired,     //required, sets callback to acknowledge if input is between ranges
    cbSetFocus: PropTypes.func.isRequired,          //required, sets callback for setting the focus
    cbGetText: PropTypes.func.isRequired            //required, sets callback to get the current value
};

export default CustomTextBox;
