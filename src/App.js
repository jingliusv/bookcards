import React from 'react';
import Navbar from './components/Navbar';
import BooksHaveContextProvider from './contexts/BooksHave';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BooksHaveContextProvider>
        <Navbar />
      </BooksHaveContextProvider>
    </div>
  );
}

export default App;
