import uuid from 'uuid';

export const booksReducer = (state, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, 
                {
                    title: action.newBook.title, author: action.newBook.author,
                    content: action.newBook.content,
                    id: uuid()
                } 
            ];
        case 'DELETE_BOOK':
            return state.filter( book => book.id !== action.id );
        default:
            return state;
    }
}