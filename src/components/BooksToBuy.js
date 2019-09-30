import React, { useContext } from 'react';
import { BooksToBuyContext } from '../contexts/BooksToBuyContext';
import BookDetails from './BookDetails';
import Title from './Title';
import Modal from './Modal';

const BooksToBuy = () => {
    const { booksToBuy } = useContext(BooksToBuyContext);

    if(booksToBuy.length === 0){
        return(
            <div className="container">
                <Title title="Books that I wish to have" type="booksToBuy" />
                <Modal modalId="addToBuyModal"/>
                <p>Sorry, you don't wish to buy any books in future.</p>
            </div>
        )
    }

    return (
        <div className="container">  
            <Title title="Books that I wish to have" type="booksToBuy" />
            <Modal modalId="addToBuyModal"/>
            <div className="card-columns">
                {
                    booksToBuy.map(book => {
                        return(                           
                            <BookDetails key={book.id} book={book} modalId="addToBuyModal"></BookDetails>
                        )
                    })
                } 
            </div>
        </div>
    );
};

export default BooksToBuy;