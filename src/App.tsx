import React from "react";
import Navigation from "./components/Navigation.tsx";
import Main from "./components/Main.tsx"
const App = () => {
  return (
    <div id="page-container">
      <header>
        <h1>CS320 Final Project</h1>
      </header>
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
