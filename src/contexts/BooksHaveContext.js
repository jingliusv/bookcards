import React, {createContext, useState} from 'react';

export const BooksHaveContext = createContext();

const BooksHaveContextProvider = (props) => {
    const [booksHave, setBooks] = useState([
        {id: 1, title: 'Freakonomics', author: 'Steven D.Levitt, Stephen J.Dubner', content: 'Asking provocative and profound questions about human motivation and contemporary living and reaching some astonishing conclusions, Freakonomics will make you see the familiar world through a completely original lens.'},
        {id: 2, title: 'Upheaval', author: 'Jared Diamond', content: 'In his landmark international bestsellers Guns, Germs and Steel and Collapse, Jared Diamond transformed our understanding of what makes civilizations rise and fall. Now in the third book in this monumental trilogy, he reveals how successful nations recover from crisis.'},
        {id: 3, title: 'The Future of Capitalism', author: 'Paul Collier', content: 'From world-renowned economist Paul Collier, a candid diagnosis of the failures of capitalism and a pragmatic and realistic vision for how we can repair it.'},
        {id: 4, title: 'Nine Pints', author: 'Rose George', content: 'An eye-opening exploration of blood, the lifegiving substance with the power of taboo, the value of diamonds and the promise of breakthrough science.'}
    ]);

    return (  
        <BooksHaveContext.Provider value={{booksHave}}>
            {props.children}
        </BooksHaveContext.Provider>
    );
}
 
export default BooksHaveContextProvider;