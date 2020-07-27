import React from 'react'

export default function Login(props) {
    return (
        <form>
            <label>Username
            <input
                name='username'
                type='text'
                maxLength='15'
            // value={}
            // onChange={}
            />
        </label>
        <label>Password
                <input
                name='password'
                type='password'
                maxLength='15'
            // value={}
            // onChange={}
            />
        </label>

        </form>
        
    )
}