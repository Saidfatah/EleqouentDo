import React from 'react'

const Input = ({value,setValue,placeholder}) => {
    return (
        <input 
        onChange={e=>{
            console.log(e.target.value)
            setValue(e.target.value)
        }}
        value={value}
        className={" text-gray-500 text-sm border-gray-300 border rounded-xl pl-2 focus:border-green-300 h-4  py-4 w-full outline-none "}
        placeholder={placeholder}  
        />
    )
}

export default Input
