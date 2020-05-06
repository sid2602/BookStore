import styled from 'styled-components';

export const BigStyles = {
    content : {
      width:  '70%',
      height: '70%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      padding: 0,
      display: 'flex',
      
      border: 0,

    },
    overlay:{
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
  
  };

  export const SmallStyles = {
    
      
      content : {
        display: 'flex',
      flexDirection: 'column',
        width:  '70%',
        height: '90%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: 0,
        border: 0,
      },
      overlay:{
          backgroundColor: 'rgba(0,0,0,0.8)',
      },
    
  
}


export const ImageDiv = styled.div`
  width:500px;
  height:100%;
  overflow-y:hidden;
  
  img{
    width:100%;
    height: auto;
  }

  @media (max-width: ${({theme})=> theme.size.laptopL}){
    width: 350px;
    display: flex;
    align-items: center;
}

@media (max-width: ${({theme})=> theme.size.laptop}){
    
    width: 100%;
    flex: 1;
    justify-content: center;
    img{
      height: 100%;
      width: 60%;
      
    }

    @media (max-width: ${({theme})=> theme.size.mobileL}){
      flex: 0;

    }
    
    
    
}

`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column;
  height: 100%;
  
  padding: 20px;

  h1{
    font-size: 40px;
    text-align: center;


    @media (max-width: ${({theme})=> theme.size.mobileL}){
      font-size: 30px;

    }


  }

  h3{
    margin-left: 20px;
  }


  p{
    text-align: center;
    font-size: 20px;
    line-height: 25px;

    @media (max-width: ${({theme})=> theme.size.laptopL}){
      font-size: 18px;
      line-height: 22px;


      @media (max-width: ${({theme})=> theme.size.laptop}){
        font-size: 15px;
        line-height: 18px;
    }
  }

 


  }
  
`;


export const LinkButton = styled.a`
  display: block;
  
  color: black;
  border: 2px solid black;
  padding: 12px 40px;
  border-radius: 10px;
  margin: 20px auto;
  transition: 0.2s;
  &:hover{
    cursor: ${props => props.primary? "context-menu" :"pointer"};
   color: ${props => props.primary? "black" :"white"};
    background: ${props => props.primary? "white" : props.theme.colors.blue.light} };
}

  

`;

