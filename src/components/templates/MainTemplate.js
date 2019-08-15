import React from 'react';
import styled from 'styled-components';

const commonTemplateStyle = `
    width: 100vw;
    padding: 10px 25px;
`;

const HeaderTemplate = styled.header`${commonTemplateStyle}`;
const BodyTemplate = styled.main`
    ${commonTemplateStyle}
`;

const MainTemplate = ({headerContent, bodyContent}) =>
    <>
        <HeaderTemplate>
            {headerContent}
        </HeaderTemplate>
        <BodyTemplate>
            {bodyContent}
        </BodyTemplate>
    </>

export default MainTemplate;