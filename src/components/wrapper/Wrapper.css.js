import styled from 'styled-components';

const Wrapper = styled.div`
     max-width: ${({theme})=>theme.size.laptopL};
     padding-left: 10px;
     padding-right: 10px;
     margin-left:auto;
     margin-right:auto;

     @media (max-width: ${({theme})=>theme.size.laptopL}){
          max-width: ${({theme})=>theme.widthSize.laptop};
     }

     @media (max-width: ${({theme})=>theme.size.laptop}){
          max-width: ${({theme})=>theme.widthSize.tablet};
     }

     @media (max-width: ${({theme})=>theme.size.tablet}){
          max-width: ${({theme})=>theme.widthSize.mobileL};
     }

     @media (max-width: ${({theme})=>theme.size.mobileL}){
          max-width: ${({theme})=>theme.widthSize.mobileS};
     }

`;

export default Wrapper;