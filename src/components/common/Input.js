import React from 'react'

const Input = ({value,setValue,placeholder,type,override}) => {
    return (
        <input 
        onChange={e=>{
            setValue(e.target.value)
        }}
        value={value}
        type={type || "text"}
        className={" text-gray-500 text-sm border-gray-300 border rounded-md pl-2 focus:border-green-300 h-4  py-4 w-full outline-none "+override}
        placeholder={placeholder}  
        />
    )
}

export default Input
