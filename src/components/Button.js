import React from 'react';

export const AddToBuyButton = () => {
    return(
        <button type="button" className="btn btn-outline-primary ml-5" data-toggle="modal" data-target="#addToBuyModal">
            <i className="fas fa-plus mr-2"></i>Wish more
        </button>
    )
}

export const AddHaveButton = () => {
    return (
        <button type="button" className="btn btn-outline-primary ml-5" data-toggle="modal" data-target="#addHaveModal">
            <i className="fas fa-plus mr-2"></i>Add more
        </button>
    );
};


