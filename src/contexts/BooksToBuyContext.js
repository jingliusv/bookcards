import React, {createContext, useState} from 'react';

export const BooksToBuyContext = createContext();

const BooksToBuyContextProvider = (props) => {
    const [booksToBuy, setBooks] = useState([
        {id: 1, title: 'Normal People', author: 'Sally Rooney', content: 'Connell and Marianne grow up in the same small town in the west of Ireland, but the similarities end there. In school, Connell is popular and well-liked, while Marianne is a loner. But when the two strike up a conversation - awkward but electrifying - something life-changing begins.'},
        {id: 2, title: 'Sapiens : A Brief History of Humankind', author: 'Yuval Noah Harari', content: 'Fire gave us power. Farming made us hungry for more. Money gave us purpose. Science made us deadly. This is the thrilling account of our extraordinary history - from insignificant apes to rulers of the world.'},
        {id: 3, title: 'The Power of Now : A Guide to Spiritual Enlightenment', author: 'Eckhart Tolle', content: 'The bestselling self-help book of its generation - which has now sold over a million copies in the UK alone. Eckhart Tolle demonstrates how to live a healthier and happier life by living in the present moment.'}
    ]);

    return (  
        <BooksToBuyContext.Provider value={{booksToBuy}}>
            {props.children}
        </BooksToBuyContext.Provider>
    );
}
 
export default BooksToBuyContextProvider;