import React from 'react';
import styled from 'styled-components';
import MenuItem from './items/MenuItem';
import ItemLink from './items/ItemLink';
import ItemText from './items/ItemText'

const Nav = styled.nav`
`;

const Menu = () =>
    <Nav>
        <MenuItem>
            <ItemLink to={"/"}>
                <ItemText>Home</ItemText>
            </ItemLink>
        </MenuItem>
    </Nav>

export default Menu;
    