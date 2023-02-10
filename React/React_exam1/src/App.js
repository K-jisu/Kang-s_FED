import React from 'react';
import './App.css';
import Container from './Container';
import MyHeader from './MyHeader';
import Counter from './Counter';

function App() {

  const counterProps = {
    a: 1, 
    b: 2, 
    c: 3, 
  }
  
  return (
    <Container>
      <div>
        <MyHeader/>
        <Counter {...counterProps}/>
      </div>
    </Container>
  );
}

export default App;
