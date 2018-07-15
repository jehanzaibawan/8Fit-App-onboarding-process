import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles as styles } from '../styles/globalStyles';

const CustomButton = (props) => {
    return (
        <TouchableOpacity
            style={
                [styles.continueButton,
                props.disabled ?
                    styles.continueButtonInActive :
                    styles.continueButtonActive
                ]
            }
            onPress={props.cbOnPress}
            disabled={props.disabled}
        >
            <Text
                style={
                    [styles.buttonTitle,
                    props.disabled ?
                        styles.buttonTitleInActive :
                        styles.buttonTitleActive
                    ]
                }
            >{props.title}</Text>
        </TouchableOpacity>
    );
}

CustomButton.defaultProps = {
    title: 'Submit',
    disabled: false
};

CustomButton.propTypes = {
    title: PropTypes.string,                //sets the title of the button
    disabled: PropTypes.bool,               //sets the active or inActive state of the button
    cbOnPress: PropTypes.func.isRequired    //required, sets the callback of onPress
};

export default CustomButton;