//feature1
import React from 'react';
import data from './data.json';
import { render } from '@testing-library/react';
import Products from './components/Products';
import Filter from './components/Filter';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render(){
  return (
    <div className = "grid-container">
      <header>
        <a href = "/">React Shopping Cart</a>
              </header>
              <main>
                <div className = "content">
                  <div className = "main">
                    <Filter count = {this.state.products.length}></Filter>

                 <Products products = {this.state.products}></Products>
                  </div>
                  <div className = "sidebar">Cart Items</div>
                </div>        
              </main>
              <footer>
                All right is reserved
              </footer>
    </div>
  );
  }
}

export default App;
