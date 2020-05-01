import React , {useMemo} from 'react';

import {MainWrapper,Book, Button} from './Main.css'
import { connect } from 'react-redux';

const Main = ({items,error}) => {

    let Books,Bookcase;
    
     Books = items;
     Bookcase = Books.map(item => (
    
        <Book key={item.id} >
            
            <img src={item.volumeInfo.imageLinks === undefined ? "https://www.gollancz.co.uk/wp-content/uploads/2018/07/missingbook.png":item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title}/>
            <Button>Details</Button>
            <div className="desc">{item.volumeInfo.title}</div>
        </Book>
        ));
    

    const errors = "Book not Find"

    return(
        <main>
            <MainWrapper>
                {Bookcase}
            </MainWrapper>
        </main>
    )

}

const mapStateToProps = state =>({
    items: state.Books.items,
    error: state.Books.error
})

export default connect(mapStateToProps)(Main);