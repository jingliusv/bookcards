import React from 'react';

const BookDetails = ({book}) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-capitalize">{book.author}</p>
                <p className="card-text">{book.content}</p>
                <button className="btn btn-danger">Remove this book</button>
            </div>
        </div>
    );
};

export default BookDetails;