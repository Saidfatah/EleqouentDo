import React from 'react'

const CardFrame=({children,isRow,ovrride,border,padding})=> {
    const style=`bg-white
    rounded-lg
    text-left
    shadow-st
    ${border?"border border-gray-500":""}
    ${isRow?"inline-flex ":""}
    ${padding?"p-2":""}
    ${ovrride} 
     `
    return (
        <div className={style}  style={{boxShadow:"0px 0px 10px 2px rgba(0,0,0,.05)"}} >
            {children}
        </div>
    )
}

export default CardFrame
