import React from "react";

const Badge = ({ variant = "square", color = "gray", text = "Badge" }) => {
  return (
    <button className={`badge badge--${variant} badge--${color}`}>
      {text}
    </button>
  );
};

const Badges = () => {
  const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  const variants = ["square", "pill"];

  return (
    <div className="badges">
      <h1 className="sub-header">BADGES</h1>
      <div className="general-badge-container">
        {variants.map((variant) => (
          <div key={variant}>
            <h2>{variant.toUpperCase()}</h2>
            <div className="badges-container">
              {colors.map((color) => (
                <Badge key={color} variant={variant} color={color} text="Badge" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;