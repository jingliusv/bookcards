import React, {useContext} from 'react';
import { BooksHaveContext } from '../contexts/BooksHaveContext';
import BookDetails from './BookDetails';

const BooksHave = () => {
    const { booksHave } = useContext(BooksHaveContext);

    return booksHave.length ? (
        <div className="container">
            <h2 className="dispaly-4 text-capitalize my-5">Books that I own</h2>
            <div className="card-columns">
                {
                    booksHave.map(book => {
                        return(                           
                            <BookDetails key={book.id} book={book}></BookDetails> 
                        )
                    })
                }
            </div>           
        </div>
    ) : (
        <div></div>
    );
};

export default BooksHave;