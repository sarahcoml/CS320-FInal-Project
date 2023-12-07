import React from "react";
import Navigation from "./components/Navigation.tsx";
import Main from "./components/Main.tsx";
const App = () => {
  return (
    <div id="page-container">
      <header>
        <Navigation />
        <h1>Your Healthcare Inside + Out</h1>
      </header>
      <Main />
    </div>
  );
};

export default App;
