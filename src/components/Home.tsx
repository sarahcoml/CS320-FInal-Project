import React from "react";
import { Route, Routes } from "react-router-dom";
// import "../styles/subPage.scss";

const Home = () => (
  <div id="home">
    <div id="title">
      <h1 id="app-title">Your Healthcare Inside + Out</h1>
      <p id="title-discription">
        Answering your health questions post-incarceration
      </p>
    </div>
    <div id="sub-items-home">
      <div id="left">
        <h2>Before You're Released</h2>
        <p>Here, you will find many resources</p>
      </div>
      <div id="right">
        <h2>After You're Released</h2>
        <p>Here, you will find many resources</p>
      </div>
    </div>
  </div>
);

export default Home;
