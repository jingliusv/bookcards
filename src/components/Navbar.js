import React, { useContext } from 'react';
import { BooksHaveContext } from '../contexts/BooksHaveContext';
import { BooksToBuyContext } from '../contexts/BooksToBuyContext';

const Navbar = () => {
    const { booksHave } = useContext(BooksHaveContext);
    const { booksToBuy } = useContext(BooksToBuyContext);
    const booksnum = booksHave.length !== 1 || booksToBuy.length !== 1 ? 'books' : 'book';

    const checkNum = (arr) => {
        return arr.length !== 1 ? 'books' : 'book';
    }

    return (  
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-capitalize">
                <h1 className="display-4">My book collection</h1>
                <hr className="my-4"></hr>
                <p>Currently, you own {booksHave.length} {checkNum(booksHave)}</p>
                <p>You wish to buy {booksToBuy.length} {checkNum(booksToBuy)} in future</p>
            </div>
        </div>
    );
}
 
export default Navbar;
