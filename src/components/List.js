import React from 'react';

const List = props => {
  let List_items = props.list_items.map(item => <li>{item}</li>)
  return (
    <div className='box list'>
      <h1>{props.name}</h1>
      <ul>
        {List_items}
      </ul>
    </div>
  )
}

export default List;
