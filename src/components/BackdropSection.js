import React from "react"

const BackDrop = ({ activeClass, click }) => (
  // eslint-disable-next-line
  <div role="button" className={activeClass} onClick={click}></div>
)

export default BackDrop
