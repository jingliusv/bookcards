import React, { useContext, useState } from 'react';
import { BooksHaveContext } from '../contexts/BooksHaveContext';
import { BooksToBuyContext } from '../contexts/BooksToBuyContext';

const BookForm = ({modalId}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const booksHaveDispatch = useContext(BooksHaveContext);

    const booksToBuyDispatch = useContext(BooksToBuyContext);

    const getRightDispatch = (type) => {
        if(type === "addHaveModal"){
            return booksHaveDispatch.dispatch({ type: 'ADD_BOOK', newBook: {title, author, content } });
        } else {
            return booksToBuyDispatch.dispatch({ type: 'ADD_BOOK', newBook: {title, author, content } });
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        getRightDispatch(modalId);
        setTitle('');
        setAuthor('');
        setContent('');
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group">
                <label htmlFor="bookTitle">Book Title</label> 
                <input 
                    type="text" 
                    className="form-control" 
                    value={title} 
                    id="bookTitle"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea 
                    type="text"
                    className="form-control"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Save the book</button>
        </form>
    );
};

export default BookForm;