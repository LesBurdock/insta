import React, { useState } from "react";
import "./index.css";
import { CardDataMap } from "./components/CardDataMap";
import { getCardData } from "./data/getCardData";

// we always save data to state!
// we always import data into the parent and then use throughout the app where needed.
// so there is just one pipe with all the data.
export default function App() {
  const [cardData, setCardData] = useState(getCardData);
  return (
    <div className="App">
      <CardDataMap data={cardData}></CardDataMap>
    </div>
  );
}

// export default App;
