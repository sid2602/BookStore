import React, {useState} from 'react';
import {Nav,WrapperNavigation,Input} from './Navigation.css'

import {connect} from 'react-redux';

import {getAllBooks} from '../../data/operations/fetchBooks'

const Navigation = ({getAllBooks}) => {


    const [value,setValue] = useState("");


    const handleSubmit = e =>{
        e.preventDefault()
        getAllBooks(value);
    }

    const handleInput = e =>{
        setValue(e.target.value);
        
    }

    return ( 
        <Nav>
            <WrapperNavigation>
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="search for the books" value={value} onChange = {handleInput}/>
                </form>
            </WrapperNavigation>
        </Nav>
     );
}

const mapDispatchToProps = dispatch =>({
    getAllBooks: (item)=>dispatch(getAllBooks(item))
  })
  

  
  const ConectedApp = connect(null,mapDispatchToProps)(Navigation);


 
export default ConectedApp;