import React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';

import './modal.css';

export default function Modal(props) {


    const { header = null, body, footer } = props;
    const { outsideClick } = props;

    const [closed, setClosed] = useState(true);

        const handleOutsideClick = (e) => {
            if (outsideClick) {
                if (e.target.classList.contains('modal')) {
                    setClosed(true);
                }
            }            
        };

    return (

        <>
            {React.cloneElement(props.children, { onClick: () => setClosed(false) })}
            <div className={`modal ${!closed ? 'modal-visible' : ''}`} onClick={handleOutsideClick}>

                <div className="modal-content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="close-button" onClick={() => setClosed(true)}>
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                    {header && <div className="modal-header">{header}</div>}
                    <div className='modal-body'>{body}</div>
                    {footer && <div className="modal-footer">{footer}</div>}
                </div>
            </div>
        </>
    );

}

Modal.propTypes = {
    header: PropTypes.node,
    body: PropTypes.node.isRequired,
    footer: PropTypes.node,
    outsideClick: PropTypes.bool,

    children: PropTypes.node
};
