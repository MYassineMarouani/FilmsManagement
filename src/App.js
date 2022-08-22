import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StoreProvider from './context/StoreProvider';

function App() {

  return (
    <StoreProvider> 
    <div className="App">

      <Header  />
    </div>
    </StoreProvider>
  );
}

export default App;
