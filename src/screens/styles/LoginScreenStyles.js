import {StyleSheet} from "react-native";
import * as Theme from 'src/theme';

const styles = StyleSheet.create({
    root: {
        ...Theme.Styles.screen.root,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Theme.Colors.bloodOrange
    }
});

export default styles;
