import React from 'react';
import './App.css';
import logo from './logo.svg'
import Message from './components/Message.js'

function App() {

  return (
    <div className="App">
      <Message 
        name="Vasya"
        logo={logo}
        title="My Title"
        text="Hello"
       />
      <Message 
        name="Katya"
        logo={logo}
        title="Katya title"
        text="Yo"
       />
      <Message 
        name="Sasha"
        logo={logo}
        title="Sasha title"
        text="Sasha text"
       />
    </div>
  );
}

export default App;
