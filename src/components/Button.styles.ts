import styled from 'styled-components';

export const ButtonContainer = styled.button `
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 8px;
    margin: 10px;
    cursor: pointer;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.seccondary}
`