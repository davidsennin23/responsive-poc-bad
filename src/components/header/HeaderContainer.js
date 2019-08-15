import React from 'react';
import Container from '../common/Container';
import Logo from './logo/Logo';
import MenuContainer from './menu/MenuContainer';
import Menu from './menu/Menu';

const HeaderContainer = () =>
    <Container>
        <Logo/>
        <MenuContainer>
            <Menu/>
        </MenuContainer>
    </Container>

export default HeaderContainer;