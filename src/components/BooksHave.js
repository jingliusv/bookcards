import React, {useContext} from 'react';
import { BooksHaveContext } from '../contexts/BooksHaveContext';
import BookDetails from './BookDetails';
import Title from './Title';
import Modal from './Modal';

const BooksHave = () => {
    const { booksHave } = useContext(BooksHaveContext);

    return booksHave.length ? (
        <div className="container">
            <Title title="Books that I own" type="booksHave"/>
            <Modal modalId="addHaveModal"/>
            <div className="card-columns">
                {
                    booksHave.map(book => {
                        return(                           
                            <BookDetails key={book.id} book={book} modalId="addHaveModal"></BookDetails> 
                        )
                    })
                }
            </div>           
        </div>
    ) : (
        <div className="container">
            <Title title="Books that I own" type="booksHave"/>
            <Modal modalId="addHaveModal"/>
            <p>Sorry, you don't own any books now.</p>
        </div>
    );
};

export default BooksHave;