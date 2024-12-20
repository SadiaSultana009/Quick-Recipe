import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetaile from "./components/FoodDetaile";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(null);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          {foodId ? (
            <FoodDetaile foodId={foodId} />
          ) : (
            <p>Please select a recepie</p>
          )}
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
