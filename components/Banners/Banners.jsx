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
            "&ZeroWidthSpace;"
            "Congratulations!"
          </button>
        </div>
        <h2>Warning</h2>
        <div className="banner-yellow">
          <button className="banner-button-yellow">
            <div className="banner-icon-exclamation"></div>
            "&ZeroWidthSpace;"
            "Attention!"
          </button>
        </div>
        <h2>Error</h2>
        <div className="banner-red">
          <button className="banner-button-red">
            <div className="banner-icon-xcircle"></div>
            "&ZeroWidthSpace;"
            "There is a problem with your Application"
          </button>
        </div>
        <h2>Neutral</h2>
        <div className="banner-blue">
          <button className="banner-button-blue">
            <div className="banner-icon-information"></div>
            "&ZeroWidthSpace;"
            "Update Available!"
          </button>
        </div>
      </div>
    </div>
  )
}