import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import BuyItem from './components/BuyItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bank: 10,
      stock: [
        {
          name: "Apple",
          amount: 2,
          value: 3,
          cost: 1,
          id: 1
        },
        {
          name: "Bannana",
          amount: 3,
          value: 2,
          cost: 1,
          id: 2
        }
      ]
    }
    this.handleSellItem = this.handleSellItem.bind(this);
    this.handleBuyItem = this.handleBuyItem.bind(this);
    this.openShop = this.openShop.bind(this);
  }
  handleSellItem(productId) {
    let currentStock = this.state.stock;
    currentStock.map((item) => {
      if(productId === item.id && item.amount > 0) {
          item.amount = item.amount - 1;
          console.log('customer bought a ', item.name);
          this.setState((prevState) => ({
            bank: prevState.bank + item.value,
            stock: currentStock
          }));
        } 
        return currentStock;
      }
    )
  }
  handleBuyItem(productId) {
    let currentStock = this.state.stock;
    currentStock.map((item) => {
      if(productId === item.id && item.cost <= this.state.bank) {
          item.amount = item.amount + 1;
          this.setState((prevState) => ({
            bank: prevState.bank - item.cost,
            stock: currentStock
          }));
        } 
        return currentStock;
      }
    )
  }
  openShop() {
    this.customers();
  }
  customers() {
    const amount = Math.floor(Math.random() * 10);
    let i = 0;
    while(i < amount) {
      this.state.stock.map((item) => {
        if(Math.random() >= 0.5) {
          return this.handleSellItem(item.id);
        } else {
          return null;
        }
      })
      i++;
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <p>Content</p>
          <p>Bank: {this.state.bank}</p>
          <BuyItem handleBuyItem={this.handleBuyItem} stock={this.state.stock} />
          <button type="button" onClick={this.openShop}>Open</button>
        </Content>
      </div>
    );
  }
}

export default App;
