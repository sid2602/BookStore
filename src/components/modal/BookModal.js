import React,{useState}  from 'react';
import WindowSizeListener from 'react-window-size-listener'
import Modal from 'react-modal';

import {BigStyles,SmallStyles,ImageDiv,InfoContainer,LinkButton} from './BookModal.css'
import './modalTransition.css'


const BookModal = ({opened,closeModal,info,saleLink}) => {

    const [windowWidth,setWindowWidth] = useState(0);
    

    let VolumeInfo = {
        title: info!==undefined ? info.title : '',
        authors : info!==undefined ? info.authors : '',
        imgSrc: info!==undefined && info.imageLinks !== undefined ? info.imageLinks.smallThumbnail : 'https://www.gollancz.co.uk/wp-content/uploads/2018/07/missingbook.png',
        description: info!==undefined && info.description !== undefined ? info.description : "",
    }
   
    

    return(
        <WindowSizeListener onResize={(windowSize) => setWindowWidth(windowSize.windowWidth)}> 
            <Modal isOpen={opened} onRequestClose={closeModal} style = {windowWidth < 1024 ?  SmallStyles : BigStyles} ariaHideApp={false} closeTimeoutMS={200}>
                <ImageDiv>
                     <img src={VolumeInfo.imgSrc} alt="cos"></img>
                </ImageDiv>
                <InfoContainer>
                    <h1>{VolumeInfo.title}</h1>
                    <h3>{VolumeInfo.authors}</h3>
                    <p>{VolumeInfo.description}</p>
                    {
                        saleLink !== "NOT_FOR_SALE"? <LinkButton href = {saleLink}>Go to Shop</LinkButton> : <LinkButton href={undefined} primary>NOT FOR SALE</LinkButton>
                    }
                </InfoContainer>
                
            </Modal>
        </WindowSizeListener>
    )

}


export default BookModal;