import React from "react"

export default function Badges(){
  return (
    <div className="badges">
      <h1 className="sub-header">BADGES</h1>
      <div className="general-badge-container">
        <h2>SQUARE</h2>
        <div className="badges-container">
          <button className="button-square button-gray">Badge</button>
          <button className="button-square button-red">Badge</button>
          <button className="button-square button-yellow">Badge</button>
          <button className="button-square button-green">Badge</button>
          <button className="button-square button-blue">Badge</button>
          <button className="button-square button-indigo">Badge</button>
          <button className="button-square button-purple">Badge</button>
          <button className="button-square button-pink">Badge</button>
        </div>
        <h2>PILL</h2>
        <div className="badges-container">
          <button className="button-pill button-gray">Badge</button>
          <button className="button-pill button-red">Badge</button>
          <button className="button-pill button-yellow">Badge</button>
          <button className="button-pill button-green">Badge</button>
          <button className="button-pill button-blue">Badge</button>
          <button className="button-pill button-indigo">Badge</button>
          <button className="button-pill button-purple">Badge</button>
          <button className="button-pill button-pink">Badge</button>
        </div>
      </div>
    </div>
  )
}