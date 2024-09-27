import React from "react";
import Header from "./components/Header";
import "./App.css"
import Home from "./components/lists/Home"
import Features from "./components/Features/Features"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <Home/> 
    <Features/>
    <Contact/>
    <Footer/>
    </>
    
  );
}

export default App;
