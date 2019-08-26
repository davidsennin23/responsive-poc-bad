import React from 'react';

const commonStyles = {

    container: `
        min-height: 1px;
        max-width: 1200px;
        padding: 10px;
        margin: 0 auto;
    `,

    clearFix: `
        &:before,
        &:after {
            content: " ";
            display: table;
        }
        &:after {
            clear: both;
        }    
    `,

}

class App {

    get commonStyles() {
        return commonStyles;
    }

    isMobile(width) {
        return width <= 768;
    }

}

const app = new App();
const AppContext = React.createContext({});

const buildApp = (App) =>
    class extends React.Component {

        render() {
            return (
                <AppContext.Provider value={app}>
                    <App/>
                </AppContext.Provider>
            )
        }

    }

export {
    buildApp,
    AppContext
}