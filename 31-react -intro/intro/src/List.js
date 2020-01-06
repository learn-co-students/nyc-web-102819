import React from 'react'

const List = (props) => {
  console.log(props)
  return (
    <ul className="todo-list">
      {
        props.items.map((item) => <li>{item}</li>)
      }
    </ul>
  )
}

export default List