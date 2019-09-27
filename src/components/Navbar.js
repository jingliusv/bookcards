import React, { useContext } from 'react';
import { BooksHaveContext } from '../contexts/BooksHave';

const Navbar = () => {
    const { booksHave } = useContext(BooksHaveContext);
    const booksnum = booksHave.length !== 1 || booksHave.length !== 0 ? 'books' : 'book';

    return (  
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-capitalize">
                <h1 className="display-4">My book database</h1>
                <p>Currently you own {booksHave.length} {booksnum}</p>
                <p>You wish to buy 3 books in future</p>
            </div>
        </div>
    );
}
 
export default Navbar;
