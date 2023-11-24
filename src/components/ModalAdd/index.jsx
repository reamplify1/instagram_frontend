'use client'
import ModalAddSecond from "../ModalAddSecond"
import React, { useState, useEffect } from 'react';

export default function ModalAdd({close}){
    // console.log('close in ModalAdd:', close);

    const [modalAddSecondIsOpen, setModalAddSecondIsOpen] = useState(false);

    const openModalAddSecond = () => {
        // close();
        setModalAddIsOpen(false);
        setModalAddSecondIsOpen(true);
    };

    useEffect(() => {
        console.log('modalAddSecondIsOpen:', modalAddSecondIsOpen);
        if (modalAddSecondIsOpen) {
            close();
        }
    }, []);

    return(
        <div className="modal-add">
            <div className="modal-add-backdrop" onClick={() => close()}></div>
            <div className="modal-add-inner">
                <div className="modal-inner1">
                    <h4>Create new post</h4>
                </div>
                <div className="modal-inner2">
                    <img src="/images/add-image-icon.svg"/>
                    <p>Drag photos and videos here</p>
                    <button onClick={openModalAddSecond} className="button-blue-bordered">
                    Select from computer
                    </button>
                </div>
                
            </div>
            {modalAddSecondIsOpen && <ModalAddSecond closeSecond={() => setModalAddSecondIsOpen(false)}/>}
        </div>
    )
}