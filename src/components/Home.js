import React, { Component } from "react";

import List from "./skills/List";
import Form from "./skills/Form";

class Home extends Component {
  render() {
    return (
      <content>
        <h1 className="title_page">add your skills</h1>
        <Form />
        <List />
      </content>
    );
  }
}

export default Home;
