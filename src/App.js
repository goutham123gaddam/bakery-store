import React from "react";
import Main from "./Components/Main";
import Strings from "./Components/strings.json";
import Checkout from "./Components/Checkout";
import {Routes, Route} from "react-router-dom";
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {items: [], count: 0};
    var key = 0;
    Strings.Body.Items.map((Object) => {
      this.state.items.push({
        id: key++, name: Object.name, cost: Object.cost, count : 0
      })
    })
  }

  addElementToCart(id) {
    this.state.items.forEach((item) => {
      if(item.id == id) {
        item.count++; 
        this.setState((state) => {
          return {count: state.count+1}
        });
      }
    })
  } 

  deleteElementToCart() {
    var newArray = this.state.items.map((item) => {
      return {
        id: item.id, name: item.name, cost: item.cost, count : 0
      };
    })
    this.setState((state) => {
      return {count: 0}
    });
    this.setState((state) => {
      return {items: newArray};
    })
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Main 
              count={this.state.count}
              addElementToCart={this.addElementToCart.bind(this)}/>
          }></Route>
          <Route path="/checkout" element={
            <Checkout 
              items={this.state.items} 
              deleteElementToCart={this.deleteElementToCart.bind(this)}/>
          }></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
