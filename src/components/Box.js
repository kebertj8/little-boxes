import React from 'react'
import Numbers from './Numbers'

const Boxes = props => {
  let boxClass = `box {boxClass}`
  
  let image
  //debugger
  if (props.picture) {
    image = <img src={props.picture}/>
  }
  
  
  return (
    <div className={boxClass}>
      <h1>{props.header}</h1>
      {image}
    </div>
  )
}

export default Boxes;