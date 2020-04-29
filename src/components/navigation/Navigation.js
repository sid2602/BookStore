import React, {useState} from 'react';
import {Nav,WrapperNavigation,Input} from './Navigation.css'

const Navigation = () => {
    const [value,setValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(value)
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




 
export default Navigation;