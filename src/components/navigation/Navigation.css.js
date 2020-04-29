import styled from 'styled-components'
import Wrapper from '../wrapper/Wrapper.css'


export const Nav =  styled.nav`
    width:100%;
    height: 10vh;
    position:fixed;
    background-color: rgb(240,239,238);
    border-bottom: 2px solid black;
    
`;

export const WrapperNavigation = styled(Wrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100%;
`;

export const Input = styled.input`
    width: 400px;
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
    border: none;
    border-bottom: 2px solid black;
    font-size: ${props => props.theme.fontSize.xl}px;
    text-transform: uppercase;
    background-color: transparent;
`;
