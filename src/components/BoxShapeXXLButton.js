import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { globalStyles as styles } from '../styles/globalStyles';

const BoxShapeXXLButton = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.goalWrapper} onPress={props.cbOnPress}>
                <View style={styles.goalWrapperBorderFix}>
                    <Image style={styles.chevronRight} source={require('../images/chevronRight.png')} />
                    <Text style={styles.goalsHeading}>{props.heading}</Text>
                    <Text style={styles.goalsDescription}>{props.description}</Text>
                </View>
            </TouchableOpacity>
            <Image style={styles.boxShadown} source={require('../images/boxShadow.png')} />
        </View>
    );
}

BoxShapeXXLButton.defaultProps = {
    heading: 'Button',
    description: 'and its description'
};

BoxShapeXXLButton.propTypes = {
    heading: PropTypes.string,              //sets the heading of the button
    description: PropTypes.string,          //sets the description of the button.
    cbOnPress: PropTypes.func.isRequired,   //sets callback for onPress event
};

export default BoxShapeXXLButton;

