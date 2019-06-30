import React, {useEffect} from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from 'src/screens/styles/SplashScreenStyles';
import config from 'src/config';
import {sleep} from 'src/helpers/utils';

const SplashScreen = ({navigation: {navigate}}) => {
    useEffect (() => {
        sleep(config.splashScreenLoadingTime).then(() => {
            navigate('LoginScreen');
        });
    });

    return (
        <View style={styles.root}>
            <Text style={styles.heading}>Loop Social</Text>
            <Text style={styles.loading}>Loading app...</Text>
        </View>
    );
};

export default SplashScreen;
