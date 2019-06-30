import React from 'react';
import * as Theme from 'src/theme';
import Navigation from 'src/navigation/ReduxNavigation';
import { useScreens } from 'react-native-screens';
useScreens();

const ThemeContext = React.createContext(Theme);
const EntryPoint = () => (
    <ThemeContext.Provider value={Theme}>
        <Navigation/>
    </ThemeContext.Provider>
);

export default EntryPoint;
