import React from 'react'

const Input = ({value,setValue}) => {
    return (
        <input 
        onChange={e=>{
            console.log(e.target.value)
            setValue(e.target.value)
        }}
        value={value}
        className={" text-gray-500 text-sm border-gray-300 border-b focus:border-green-300 h-4  py-4 w-full outline-none "}
        placeholder="search for a project"  
        />
    )
}

export default Input
