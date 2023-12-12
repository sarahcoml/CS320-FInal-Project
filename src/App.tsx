import React from "react";
import Navigation from "./components/Navigation.tsx";
import Main from "./components/Main.tsx";
import "./styles/App.scss";

// import "./styles/App.scss";
const App = () => {
  return (
    <div id="page-container">
      <header>
        {/* <div>
          <h1>Your Healthcare Inside + Out</h1>
          <p>Answering your health questions post-incarceration</p>
        </div> */}
        <Navigation />
      </header>
      <div id="main-container">
        <Main />
      </div>
    </div>
  );
};

export default App;
