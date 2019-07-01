import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from 'src/screens/styles/LoginScreenStyles.js';

const LoginScreen = () => (
    <View style={styles.root}>
        <Text style={styles.text}>LoginScreen</Text>
        <Icon name={"ios-alarm"} size={32} color={'orange'}  />
    </View>
);

export default LoginScreen;
