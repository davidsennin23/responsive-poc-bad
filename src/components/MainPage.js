import React from 'react';
import MainTemplate from './templates/MainTemplate';
import HeaderContainer from './header/HeaderContainer';

const MainPage = (props) =>
    <MainTemplate
        headerContent={<HeaderContainer/>}
        bodyContent={<div/>}
        {...props}
    />

export default MainPage;