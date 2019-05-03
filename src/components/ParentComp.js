import React, { Component } from "react";
import MemoComp from "./MemoComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abhi"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Abhi"
      });
    }, 2000);
  }

  render() {
    console.log("***** parent compnent rendered*****");
    return (
      <div>
        <MemoComp />
      </div>
    );
  }
}

export default ParentComp;
