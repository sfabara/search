import React, {useState} from 'react'



const Input = ({count, setCount}) => {
    return (
        <div >
            <div onClick={() => setCount(count + 1)}>This is input</div>

        </div>
    )
}

export default Input
