import styled from "styled-components";
import Wrapper from "../wrapper/Wrapper.css";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;

  background-color: ${({ theme }) => theme.colors.blue.normal};
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue.dark};
  dispaly: block;
`;

export const WrapperNavigation = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.size.mobileL}) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 400px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.pink};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  color: white;
  background-color: transparent;

  &::placeholder {
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.size.mobileL}) {
    width: 300px;
  }
`;
