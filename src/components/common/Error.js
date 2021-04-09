import React from 'react'
import Icon from './Icon'

const Error = ({error}) => {
    return (
        <div className=" flex flex-row justify-start items-center p-1 mt-1 rounded-md bg-white group " >
            <Icon name="danger" color="text-red-500" hoverColor="text-red-600" />
            <p className="text-red-600 text-start" >{error}</p>
        </div>
    )
}

export default Error
