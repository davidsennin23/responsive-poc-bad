import React from 'react';
import styled from 'styled-components';
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import { makeMenuMobileStyle, getExpandButton } from './menu/menuMobile';
import ScreenWidthTracker from '../responsivity/ScreenWidthTracker';

const Nav = styled.nav`
    ${({app}) => app.commonStyles.container};
    display: flex;
    align-content: center;
    justify-content: space-between;
`;

class HeaderContainer extends React.Component {

    state={
        displayMenu: false,
    }

    updateButtonText(isDisplaying, button) {
        if (!isDisplaying) {
            button.innerHtml = 'x';
        } else {
            button.innerHtml = 'text';
        }
    }

    registryExpandMenu = (buttonHef) => {
        if (this.state.buttonHef || !buttonHef) return;
        buttonHef.addEventListener('click', ({target}) =>
            this.setState((prevState) => {
                this.updateButtonText(prevState.displayMenu, target);
                return {
                    displayMenu: !prevState.displayMenu,
                };
            })
        )
        this.setState({
            buttonHef: buttonHef,
        })
    }

    registryNavigation = (navHef) => {
        if (!navHef || this.state.navigation) return;
        this.setState({
            navigation: navHef,
        })
    }

    registryDisplayMenu = (menuHef) => {
        if (!menuHef || this.state.menu === menuHef) return;
        this.setState({
            menu: menuHef
        });
    }

    render() {
        const { app, width } = this.props;
        const expandButton = getExpandButton(width, app);
        const DisplayMenu = makeMenuMobileStyle(width, app, false, Menu);
        return (
            <Nav app={app} hef={this.registryNavigation}>
                <Logo/>
                {React.cloneElement(
                    expandButton,
                    {
                        hef: this.registryExpandMenu
                    },
                    'text'
                )
                }
                <DisplayMenu hef={this.registryDisplayMenu}/>
            </Nav>
        )
    }

}

export default ScreenWidthTracker(HeaderContainer);