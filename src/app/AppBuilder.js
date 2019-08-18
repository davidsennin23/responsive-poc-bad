import React from 'react';

class App {

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