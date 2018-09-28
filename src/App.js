import React, { Component } from 'react';
import './App.css';

import Sidebar from "./components/Sidebar"
import MessagesList from "./components/MessagesList"
import AddMessage from "./components/AddMessage"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Sidebar />
        <section className = "main">
          <MessagesList />
          <AddMessage />
        </section> */}
      </div>
    );
  }
}

export default App;
