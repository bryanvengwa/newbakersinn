import React  from 'react'

export default function Hamburger(props) {
      
  return (
    <div className={ `menu ${ props.isOpen ?'open' : ''  }` }  onClick={props.toggle} >
          <div className="bar one"></div>
          <div className="bar two"></div>
          <div className="bar three"></div>
    </div>
  )
}
