import React from 'react';

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClose = (e) => {
        setSelectedImg(null);
    }

    return (
        <div className="back-ground" onClick={handleClose}>
            <img className="full-img" src={selectedImg} alt="full size car picture"/>
        </div>
    )
}

export default Modal;