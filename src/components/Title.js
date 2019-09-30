import React from 'react';
import { AddToBuyButton, AddHaveButton } from './Button';

const Title = ({title, type}) => {
    return (
        <h2 className="dispaly-4 text-capitalize my-5">
            <i className="fas fa-bookmark"></i> {title} 
            { type === "booksHave" ? <AddHaveButton /> : <AddToBuyButton /> }
        </h2>
    );
};

export default Title;