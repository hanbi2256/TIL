import React, { Component } from "react";
import MyComponent from "./components/MyComponent";
class App extends Component {
  state ={
    counter: 1,
  }
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.MyDiv.getBoundingClientRect());
  }

  handleClick=()=>{
    this.setState({
      counter:this.state.counter+1
    });
  }

  render() {
    return (
      <div ref={ref=>this.MyDiv=ref}>
        <MyComponent value={this.state.counter}/>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
