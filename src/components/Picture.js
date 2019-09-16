import React from 'react';
import List from './List'
let title = "Here Is a List"
let items = ["Asteroids","Comets","Moon","Planets","Stars","Sun"]
const Picture = props => {
  return (
    <div className='box picture'>
      <h1>{props.title}</h1>
      <img alt='Clever EEs' src={props.source}/>
      <List list_items={items} name={title}/>
    </div>
  )
}

export default Picture;
