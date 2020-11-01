import React, {Component} from "react"
import {Switch, Route} from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/NavBar"
import FirstNavBar from "./components/FirstNavBar"
import ProductList from "./components/ProductList"
import Details from "./components/Details"
import Cart from "./components/Cart"
import Default from "./components/Default"
import backToSchool from "./components/backToSchool"
import kinderGarden from "./components/kinderGarden"
import Home from "./components/Home.js"
import Secret from './components/Secret'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FirstNavBar />
        <Navbar />
        
      </React.Fragment>
    )
  }
}

export default App
