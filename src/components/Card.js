import React from "react"
import "./Card.css"

const Card = ({title, text, img, bc, order}) => {
  return (
    <div className={`card ${order}`}style={{
      borderTop: `solid 5px ${bc}`
    }}>
      <h2 className="card-heading">{title}</h2>
      <p className="card-text">{text}</p>
      <img src={img} alt="" className="icon"/>
    </div>
  )
}

export default Card