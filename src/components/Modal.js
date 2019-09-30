import React from 'react';
import BookForm from './BookForm';

const Modal = ({modalId}) => {
    return (
        <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={modalId}>
                            { modalId === 'addToBuyModal' ? 'Add the book that you wish to have' : 'Add the book that you own' }
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div className="modal-body">
                    <BookForm modalId={modalId}/>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
        </div>  
    );
};

export default Modal;