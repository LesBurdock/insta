import React from "react";
import CardComponent from "./CardComponent";

export const CardDataMap = (props) => {
  console.log(props);
  return (
    <div>
      {props.data.map((card) => {
        return (
          <CardComponent
            link={card.url}
            title={card.Title}
            text={card.Text}
            key={card.Id}
          />
        );
      })}
    </div>
  );
};
