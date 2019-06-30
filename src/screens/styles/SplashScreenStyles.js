import {StyleSheet} from "react-native";
import * as Theme from 'src/theme'

const styles = StyleSheet.create({
    root: {
        ...Theme.Styles.screen.root,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Theme.Colors.bloodOrange
    },
    loading: {
        fontSize: 14,
        color: Theme.Colors.charcoal
    }
});

export default styles;

