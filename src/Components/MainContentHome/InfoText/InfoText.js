import React from 'react'

export default function InfoText (props) {
  console.log(props);
  return (
    <div className='info'>
      <h2> {props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}
