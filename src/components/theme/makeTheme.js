import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const makeTheme = (App) => 
    (props) =>
    <ThemeProvider theme={theme}>
        <App {...props}/>
    </ThemeProvider>

export default makeTheme;