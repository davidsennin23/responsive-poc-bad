import React from 'react';

const theme = {
    colors: {
        mainColor: '',
        secondaryColor: '',
    },
    fontStyles: {

    },
    fontSize: {
        
    }
}

class App {

    getTheme = () => theme;

}

const app = new App();
const AppContext = React.createContext({});

const buildApp = (App) =>
    class extends React.Component {

        render() {
            return (
                <AppContext.Provider app={app}>
                    <App/>
                </AppContext.Provider>
            )
        }

    }

export {
    buildApp
}