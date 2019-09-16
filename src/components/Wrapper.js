import React from 'react';
import Numbers from './Numbers'
import Picture from './Picture'
import List from './List'

let imgtitle ="Look at This Picture"
const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.title}</h1>
      <p>
      {props.body}
      </p>
      <Numbers/>
      <Picture title={imgtitle} source={'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'}/>
    </div>
  )
}

export default Wrapper;
