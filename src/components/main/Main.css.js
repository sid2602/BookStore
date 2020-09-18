import Wrapper from "../wrapper/Wrapper.css";
import styled from "styled-components";

export const MainWrapper = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 90vh;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.size.mobileL}) {
    justify-content: center;
  }
`;

export const Book = styled.div`
  width: ${({ theme }) => theme.percentSize.xs}%;
  height: 350px;
  border: 2px solid ${({ theme }) => theme.colors.blue.normal};
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 20px;

  &:hover img {
    filter: brightness(60%);
  }

  &:hover button {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.size.laptopL}) {
    width: ${({ theme }) => theme.percentSize.s}%;
  }

  @media (max-width: ${({ theme }) => theme.size.laptop}) {
    width: ${({ theme }) => theme.percentSize.m}%;
  }

  @media (max-width: ${({ theme }) => theme.size.tablet}) {
    width: ${({ theme }) => theme.percentSize.l}%;
  }

  @media (max-width: ${({ theme }) => theme.size.mobileL}) {
    width: ${({ theme }) => theme.percentSize.xl}%;
  }

  img {
    width: 100%;
    transition: 0.2s;
  }

  .desc {
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.blue.light};
    width: 100%;
    height: 30%;
    border-top: 2px solid ${({ theme }) => theme.colors.blue.normal};
    color: white;
    font-size: ${({ theme }) => theme.fontSize.xl}px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  padding: 12px 40px;
  border: 2px solid white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  color: white;
  opacity: 0;
  transition: 0.2s;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.pink};
  }
`;
