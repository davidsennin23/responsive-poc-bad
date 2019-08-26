import React from 'react';
import styled from 'styled-components';
import MenuItem from './items/MenuItem';
import ItemLink from './items/ItemLink';
import ItemText from './items/ItemText'

const Ul = styled.ul`
    display: flex;
    margin: 10px;
    justify-content: center;
`;

// const Menu = () =>
//     <Nav>
//         <Men>
            // <MenuItem>
            //     <ItemLink to={"/"}>
            //         <ItemText>Home</ItemText>
            //     </ItemLink>
            // </MenuItem>
            // <MenuItem>
            //     <ItemLink to={"/meal-list"}>
            //         <ItemText>Meal List</ItemText>
            //     </ItemLink>
            // </MenuItem>
//         </Men>
//     </Nav>

const Menu = () =>
    <Ul>
        <MenuItem>
            <ItemLink to={"/"}>
                <ItemText>Home</ItemText>
            </ItemLink>
        </MenuItem>
        <MenuItem>
            <ItemLink to={"/meal-list"}>
                <ItemText>Meal List</ItemText>
            </ItemLink>
        </MenuItem>

    </Ul>

export default Menu;
    