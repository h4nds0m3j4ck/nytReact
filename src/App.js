import React, { Component } from 'react';
import './App.css';
import DenseAppBar from "./components/DenseAppBar";
import LabelBottomNavigation from "./components/BottomNav";

class App extends Component {
  render() {
    return (
     <div>
       <DenseAppBar />
       <LabelBottomNavigation />
     </div>
    );
  }
}

export default App;
