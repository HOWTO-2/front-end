import React from 'react'
import {Link} from 'react-router-dom'


export default function Header(props){

    return(
        <header>
            <nav>
            {/* <nav> will change into Links once completed */}
                <Link to='/'>Home</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>                           
            </nav>
        </header>
    )

}