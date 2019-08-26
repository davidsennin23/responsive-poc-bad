import styled from 'styled-components';

const getWidth = (span) => {
    console.log(span)
    span = span || 1;
    const width = (100/12) * span;
    return width;
}

const Column = styled.div`
    position: relative;
    display: inline-block;
    
    width: ${({lg}) => getWidth(lg)}%;

    @media only screen and (max-width: 936px) {
        width: ${({md}) => getWidth(md)}%;
    }

    @media only screen and (max-width: 768px) {
        width: ${({sm}) => getWidth(sm)}%;
    }

`;

export default Column;