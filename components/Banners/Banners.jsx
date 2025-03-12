import React from "react"

export default function Banners(){
  return (
    <div className="banners">
      <h1 className="sub-header">BANNERS</h1>
      <div className="banners-container">
        <h2>Success</h2>
        <div className="banner-green">
          <button className="banner-button-green">
            <div className="banner-icon-check"></div>
            <span className="banner-success">Congratulations!</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit cupiditate labore tempore animi, amet hic, a alias.</p>
          </button>
        </div>
        <h2>Warning</h2>
        <div className="banner-yellow">
          <button className="banner-button-yellow">
            <div className="banner-icon-exclamation"></div>
            <span className="banner-warning">Attention!</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit cupiditate labore tempore animi, amet hic, a alias.</p>
          </button>
        </div>
        <h2>Error</h2>
        <div className="banner-red">
          <button className="banner-button-red">
            <div className="banner-icon-xcircle"></div>
            <span className="banner-error">There is a problem with your Application</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit cupiditate labore tempore animi, amet hic, a alias.</p>
          </button>
        </div>
        <h2>Neutral</h2>
        <div className="banner-blue">
          <button className="banner-button-blue">
            <div className="banner-icon-information"></div>
            <span className="banner-neutral">Update Available!</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit cupiditate labore tempore animi, amet hic, a alias.</p>
          </button>
        </div>
      </div>
    </div>
  )
}