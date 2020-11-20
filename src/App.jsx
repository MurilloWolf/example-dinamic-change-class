import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      primeiroBtn: 0,
      segundoBtn: 0,
      terceiroBtn: 0,
    };
  }


  changeBackground(num) {
   return  num % 2 === 0 ? 'green' : 'red';
  }

  handleClick({ target :{name} }) {
    this.setState((prevState)=> ({[name]: prevState[name]+1})) 
  }

  render() {
    const { primeiroBtn, segundoBtn, terceiroBtn} = this.state

    return (
      <div> 
        <button className={this.changeBackground(primeiroBtn)} name="primeiroBtn" onClick={this.handleClick}>
          {primeiroBtn}
        </button>
        <button  name="segundoBtn" onClick={this.handleClick}>
          {segundoBtn}
        </button>
        <button  name="terceiroBtn" onClick={this.handleClick}>
          {terceiroBtn}
        </button>
      </div>
    );
  }
}
export default App;