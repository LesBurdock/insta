import React from "react";

const imageStyle = {
  height: "400px",
  width: "400px",
  objectFit: "cover",
};

const CardComponent = (props) => {
  return (
    <div className="Card" key={props.id}>
      <img alt="cardImage" style={imageStyle} src={props.link} />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default CardComponent;
