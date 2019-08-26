import React from 'react';
import MainTemplate from './templates/MainTemplate';
import HeaderContainer from './header/HeaderContainer';
import { AppContext } from '../app/AppBuilder';

const MainPage = (props) =>
    <MainTemplate
        headerContent={
            <AppContext.Consumer>
                {app => <HeaderContainer app={app}/>}
            </AppContext.Consumer>
        }
        bodyContent={<div/>}
        {...props}
    />

export default MainPage;