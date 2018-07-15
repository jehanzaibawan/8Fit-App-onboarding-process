import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import AgeScreen from '../screens/AgeScreen';
import HeightScreen from '../screens/HeightScreen';
import ResultScreen from '../screens/ResultScreen';

export default RootNavigationStack = createStackNavigator(
    {
        WelcomeScreen,
        AgeScreen,
        HeightScreen,
        ResultScreen
    },
    {
        initialRouteName: 'WelcomeScreen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderBottomColor: '#d1d1d1'
            }
        },
    }
);