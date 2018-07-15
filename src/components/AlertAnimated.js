import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Animated
} from 'react-native';
import { globalStyles as styles } from '../styles/globalStyles';

class AlertBoxAnimated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityValue: new Animated.Value(0),
            translateXValue: new Animated.Value(-20),
            visible: false
        };
    }

    componentDidMount() {
        this.props.cbShowAlert(this._showAlert);
    }

    _showAlert = (status) => {
        if (status)
            this._show();
        else
            this._hide();
    }

    _show = () => {
        this.setState({ visible: true });

        Animated.parallel([
            Animated.timing(this.state.opacityValue, {
                useNativeDriver: true,
                toValue: 1,
                duration: 1000
            }),
            Animated.timing(this.state.translateXValue, {
                useNativeDriver: true,
                toValue: 0,
                duration: 1000
            }),
        ]).start();
    }

    _hide = () => {
        Animated.parallel([
            Animated.timing(this.state.opacityValue, {
                useNativeDriver: true,
                toValue: 0,
                duration: 1000
            }),
            Animated.timing(this.state.translateXValue, {
                useNativeDriver: true,
                toValue: -20,
                duration: 1000
            }),
        ]).start(
            () => {
                this.setState({ visible: false });
            }
        );
    }

    render() {
        const animatedStyle = {
            opacity: this.state.opacityValue,
            transform: [{
                translateX: this.state.translateXValue
            }]
        };

        return (
            <Animated.Text
                style={[styles.alert,
                this.props.type == 'error' ? styles.alertError : styles.alertWarning,
                this.state.visible ? null : styles.hidden,
                    animatedStyle
                ]}>
                {this.props.message}
            </Animated.Text>
        );
    }
}

AlertBoxAnimated.defaultProps = {
    type: 'error',
    message: 'The value you entered is not valid.'
};

AlertBoxAnimated.propTypes = {
    type: PropTypes.string,                 //sets the type of alert 'error', 'warning' etc
    message: PropTypes.string,              //sets the message of the alert
    cbShowAlert: PropTypes.func.isRequired  //required, sets the callback to hide or unhide the alert 
};

export default AlertBoxAnimated;