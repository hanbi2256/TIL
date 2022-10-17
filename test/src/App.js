import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.MyDiv.getBoundingClientRect());
  }

  render() {
    return (
      <div ref={ref=>this.MyDiv=ref}>
        <h1>안녕하세요 리액트</h1>
      </div>
    );
  }
}

export default App;
