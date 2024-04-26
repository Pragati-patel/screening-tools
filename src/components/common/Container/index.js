import React from 'react'

export default function Container( {children,otherStyles,inlineStyle}) {
  return (
    <div className={`sm:px-[60px] md:px-[80px] lg:px-[120px] xl:px-[150px]  3xl:px-[160px] px-4 w-full ${otherStyles}`} style={inlineStyle}> {children}</div>
  )
}
