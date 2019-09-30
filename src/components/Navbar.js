import React, { useContext } from 'react';
import { BooksHaveContext } from '../contexts/BooksHaveContext';
import { BooksToBuyContext } from '../contexts/BooksToBuyContext';

const Navbar = () => {
    const { booksHave } = useContext(BooksHaveContext);
    const { booksToBuy } = useContext(BooksToBuyContext);

    const checkNum = (arr) => {
        return arr.length !== 1 && arr.length !== 0 ? 'books' : 'book';
    }

    return (  
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-capitalize">
                <h1 className="display-4"><i className="fas fa-book"></i> My book collection</h1>
                <hr className="my-4"></hr>
                <p>Currently, you own <span className="text-primary font-weight-bold">{booksHave.length}</span> {checkNum(booksHave)}</p>
                <p>You wish to buy <span className="text-success font-weight-bold">{booksToBuy.length}</span> {checkNum(booksToBuy)} in future</p>
            </div>
        </div>
    );
}
 
export default Navbar;
