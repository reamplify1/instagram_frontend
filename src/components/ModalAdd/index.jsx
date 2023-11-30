
import React, { useState, } from 'react';

export default function ModalAdd({close}){
    // console.log('close in ModalAdd:', close);
    const [step, setStep] = useState(1);;
    const [caption, setCaption] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        // Обработка выбранных файлов
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setStep(2);
          }
      };
      
      const handleBackClick = () => {
        setStep(1);
        // setSelectedFile(null);

      };

      const captionChange = (event) => {
        setCaption(event.target.value);
      };
    
      const captionLength = () => {
        return caption.length;
      };

    return(
        <div>
            {step == 1 && (
            <div className="modal-add">
                <div className="modal-add-backdrop" onClick={() => close()}></div>
                    <div className="modal-add-inner">
                        <div className="modal-inner1">
                            <h4>Create new post</h4>
                        </div>
                        <div className="modal-inner2">
                            <img src="/images/add-image-icon.svg"/>
                            <p>Drag photos and videos here</p>
                            {/* <button className="button-blue-bordered">
                            Select from computer
                            </button> */}
                            {/* <label htmlFor="fileInput" className="button-blue-bordered">
                                Select from computer
                            </label> */}
                            <button onClick={() => {setStep(2);}} className="button-blue-bordered">
                            Select from computer
                            </button>
                            <input type="file" id="fileInput"accept="image/*"style={{ }} onChange={handleFileChange}/>
                        </div>
                </div>
            </div>
            )}
            {step == 2 && (
            <div className="modal-add">
                <div className="modal-add-backdrop" onClick={() => close()}></div>
                    <div className="modal-add-inner">
                        <div className="modal-inner1-upload">
                            <button onClick={handleBackClick}>
                                <img src="/images/arrow-left.png"/>
                            </button>

                            <h4>Create new post</h4>
                            <button onClick={() => {close(false)}} className='button-share'>
                                Share
                            </button>
                        </div>
                        <div className="modal-inner2-upload">
                            <div className="uploaded-image">
                                <img className='' src={URL.createObjectURL(selectedFile)} alt=""/>
                            </div>
                            <div className='uploaded-image-comments'>
                                <div className='write-caption'>
                                    <textarea placeholder='Write a caption...' value={caption} onChange={captionChange}></textarea>
                                </div>
                                <div className='display-caption'>
                                    <p>{captionLength()}/2,200</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            )}
        </div>
    )
}