import React from 'react'

const Input = ({value,setValue,onFocus,placeholder,type,override,hasBorder,padding}) => {
    let style="text-gray-500 text-sm   h-4  py-4 w-full outline-none"
    if(hasBorder ){
        style+=" border-gray-300 border rounded-md pl-2 focus:border-green-300 "
    }else{
        style+=" border-none " 
    }
    // if(padding){
    // }
    return (
        <input 
        onChange={e=>{
            setValue(e.target.value)
        }}
        value={value}
        onFocus={onFocus}
        type={type || "text"}
        className={style+override}
        placeholder={placeholder}  
        />
    )
}

export default Input
