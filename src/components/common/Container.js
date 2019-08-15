import styled from 'styled-components';

const Container = styled.div`
    min-height: 1px;
    max-width: 1200px;
    margin: 0 auto;
    &:before,
    &after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
`;

export default Container;