import React from 'react';
import Navbar from './components/Navbar';
import BooksHaveContextProvider from './contexts/BooksHaveContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksHave from './components/BooksHave';
import BooksToBuyContextProvider from './contexts/BooksToBuyContext';
import BooksToBuy from './components/BooksToBuy';

function App() {
  return (
    <div className="App">
      <BooksHaveContextProvider>
        <BooksToBuyContextProvider>
          <Navbar />
          <BooksHave />
          <BooksToBuy />            
        </BooksToBuyContextProvider>
      </BooksHaveContextProvider>
    </div>
  );
}

export default App;
