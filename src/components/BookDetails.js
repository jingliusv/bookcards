import React , { useContext }from 'react';
import { BooksHaveContext } from '../contexts/BooksHaveContext';
import { BooksToBuyContext } from '../contexts/BooksToBuyContext';

const BookDetails = ({book, modalId}) => {

    const booksHaveDispatch = useContext(BooksHaveContext);

    const booksToBuyDispatch = useContext(BooksToBuyContext);

    const getRightDispatch = (type) => {
        if(type === "addHaveModal"){
            return booksHaveDispatch.dispatch({ type: 'DELETE_BOOK', id: book.id });
        } else {
            return booksToBuyDispatch.dispatch({ type: 'DELETE_BOOK', id: book.id });
        }
    }


    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-capitalize">{book.author}</p>
                <p className="card-text">{book.content}</p>
                <button onClick={() => getRightDispatch(modalId)} className="btn btn-outline-danger"><i className="far fa-trash-alt mr-2"></i>Delete</button>
            </div>
        </div>
    );
};

export default BookDetails;