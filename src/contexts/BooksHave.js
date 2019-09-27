import React, {createContext, useState} from 'react';

export const BooksHaveContext = createContext();

const BooksHaveContextProvider = (props) => {
    const [booksHave, setBooks] = useState([
        {id: 1, title: 'Freakonomics', author: 'Steven D.Levitt, Stephen J.Dubner'},
        {id: 2, title: 'Upheaval', author: 'Jared Diamond'},
        {id: 3, title: 'The Future of Capitalism', author: 'Paul Collier'},
        {id: 4, title: 'Nine Pints', author: 'Rose George'}
    ]);

    return (  
        <BooksHaveContext.Provider value={{booksHave}}>
            {props.children}
        </BooksHaveContext.Provider>
    );
}
 
export default BooksHaveContextProvider;