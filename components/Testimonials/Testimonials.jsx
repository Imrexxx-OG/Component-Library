import React from "react"

export default function Testimonials(){
  return (
    <div className="testimonials">
      <h1 className="sub-header">TESTIMONIALS</h1>
      <div className="testimonial-container">
        <h3>With Pic</h3>
        <div className="testimonial-with-pic">
          <div className="plate"></div>
          <img src="" alt="my portrait" className="headshot-image" />
          <div className="testimonial-with-pic-container">
            <img src="" alt="open quotation mark" />
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestiae iure nulla ad, praesentium deserunt illo amet a dolore sit corporis, culpa velit, optio itaque dignissimos quam veniam porro fugiat."
            <div className="testimonial-with-pic-signature">
              <div className="testmonial-with-pic-name">Imran Damare</div>
              <div className="testmonial-with-pic-title">RootEM, Founder</div>
            </div>
          </div>
        </div>
        <h3>No Pic</h3>
        <div className="testimonial-no-pic">
          <div className="testimonial-no-pic-container">
            <img src="" alt="RootEM logo" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestiae iure nulla ad, praesentium deserunt illo amet a dolore sit corporis, culpa velit, optio itaque dignissimos quam veniam porro fugiat.
            </p>
            <div className="testimonial-no-pic-signature">
              <div className="testmonial-no-pic-name">Imran Damare</div>
              <img src="" alt="divider-image" />
              <div className="testmonial-no-pic-title">RootEM, Founder</div>
            </div>
          </div>
          <div className="dot-pattern"></div>
        </div>
      </div>
    </div>
  )
}