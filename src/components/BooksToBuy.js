import React, { useContext } from 'react';
import { BooksToBuyContext } from '../contexts/BooksToBuyContext';
import BookDetails from './BookDetails';

const BooksToBuy = () => {
    const { booksToBuy } = useContext(BooksToBuyContext);

    return (
        <div className="container">  
            <h2 className="dispaly-4 text-capitalize my-5">Books that I wish to have</h2>
            <div className="card-columns">
                {
                    booksToBuy.map(book => {
                        return(                           
                            <BookDetails key={book.id} book={book}></BookDetails>
                        )
                    })
                } 
            </div>
        </div>
    );
};

export default BooksToBuy;