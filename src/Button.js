import React from 'react'

const Button = ({clickme,text, sty}) => {
  return (
    <div>
        <button onClick={clickme} className={sty}>{text}</button>
    </div>
  )
}

export default Button