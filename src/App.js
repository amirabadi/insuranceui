import React from 'react';
import Master from "./layout/Master/Master.layout";
import Home from "./views/Home/Home.views";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import _colors from './static/style/scss/utils/_color.scss';
import Routing from "./shared/Routing";
import { CookiesProvider } from 'react-cookie';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
    palette: {
        primary: {
            main: _colors.color_primary,
            light: _colors.color_primary,
            dark: _colors.color_primary,
        },
        secondary: {
            main: _colors.color_secondary,
            light: _colors.color_secondary,
            dark: _colors.color_secondary,
        }
    }
});

const App = () => {
    return (
        <CookiesProvider>
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <Routing />
            </ThemeProvider>
        </StylesProvider>
        </CookiesProvider>
    )
}

export default App;