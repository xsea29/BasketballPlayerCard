import React from "react";
import BasketballPlayerCard from "./components/BasketballPlayerCard";
import lebronImage from "./images/lebronJames-image.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BasketballPlayerCard
        name="LeBron James"
        image={lebronImage}
        position="Forward"
        stats={{
          pointsPerGame: 25.4,
          assistsPerGame: 7.1,
          reboundsPerGame: 10.5,
        }}
      />
    </div>
  );
}

export default App;
