import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles as styles } from '../styles/globalStyles';

const ToggleButton = (props) => {
    return (
        <View style={styles.toggleContainer}>
            <TouchableOpacity
                style={styles.toggleButtonLeft}
                onPress={() => props.cbToggleAction(props.optionLeft)}
            >
                <Text
                    style={
                        [styles.toggleTitleLeft,
                        props.selectedOption === props.optionLeft ?
                            styles.toggleTitleActive :
                            styles.toggleTitleInActive
                        ]
                    }
                >{props.optionLeft}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.toggleButtonRight}
                onPress={() => props.cbToggleAction(props.optionRight)}
            >
                <Text
                    style={
                        [styles.toggleTitleRight,
                        props.selectedOption === props.optionRight ?
                            styles.toggleTitleActive :
                            styles.toggleTitleInActive]
                    }
                >{props.optionRight}</Text>
            </TouchableOpacity>
        </View >
    );
}

ToggleButton.defaultProps = {
    optionLeft: 'Male',
    optionRight: 'Female',
    selectedOption: 'Female'
};

ToggleButton.propTypes = {
    optionLeft: PropTypes.string,       //sets the title of the left button of the toggle
    optionRight: PropTypes.string,      //sets the title of the right button of the toggle
    cbToggleAction: PropTypes.func,     //sets callback to switch between options
    selectedOption: PropTypes.string    //sets the default/current selected option
}

export default ToggleButton;
