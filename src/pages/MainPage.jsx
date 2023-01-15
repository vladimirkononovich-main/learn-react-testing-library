import React from "react";
import Counter from "../components/counter/Counter";

function MainPage(props) {
  return (
    <div data-testid="main-page">
      MAIN PAGE
      <Counter />
    </div>
  );
}

export default MainPage;
