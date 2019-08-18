import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Logo from './logo/Logo';
import MenuContainer from './menu/MenuContainer';
import Menu from './menu/Menu';

const HC = styled(Container)`
    background-color: blue;
`;

const HeaderContainer = () =>
    <HC>
        <Logo/>
        <MenuContainer>
            <Menu/>
        </MenuContainer>
    </HC>

export default HeaderContainer;