import React from 'react';
import styled from 'styled-components';
import ScreenWidthTracker from '../../responsivity/ScreenWidthTracker';
import Column from '../../responsivity/Column';

const MobileContainer = styled(Column)`
    position: relative;
    background-color: white;
    float: left;
    min-height: 1px;
`;

const DesktopContainer = styled(Column)`
    position: relative;
    background-color: gray;
    float: right;
    min-height: 1px;
`;

const getContainer = (width) => width <= 768 ? MobileContainer : DesktopContainer;
class MenuContainer extends React.Component {

    render() {
        const Container = getContainer(this.props.width);
        return  (
            <Container lg="6" md="8">
                {this.props.children}
            </Container>
        );
    }
}

export default ScreenWidthTracker(MenuContainer);