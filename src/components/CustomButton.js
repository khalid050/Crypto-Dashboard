import React from 'react'

const CustomButton = ({children, ...otherProps})=>{
    console.log('children', children)
   return( <button className = 'custom-button' {...otherProps}>
    {children}
    </button>
    )
}

export default CustomButton