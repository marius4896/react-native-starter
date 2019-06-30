import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import SplashScreen from 'src/screens/SplashScreen';
import LoginScreen from 'src/screens/LoginScreen';
const SplashScreenNavigationSwitch = createSwitchNavigator({
    SplashScreen: {
        screen: SplashScreen,
    },
    LoginScreen : {
        screen: LoginScreen,
    }
}, {
    header: false,
});

const MainNavigationStack = createStackNavigator({
    SplashScreen:  SplashScreenNavigationSwitch,
}, {
    initialRouteName: 'SplashScreen',
    headerMode: "none",
});

export default createAppContainer(MainNavigationStack);
