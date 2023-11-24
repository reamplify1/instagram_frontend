'use client'
export default function ModalAddSecond({closeSecond}){
    // console.log('close in ModalAdd:', close);

    return(
        <div className="modal-add-second">
            <div className="modal-add-backdrop-second" onClick={() => closeSecond()}></div>
            <div className="modal-add-inner-second">
                <div className="modal-inner-second1">
                    <img src="/images/arrow-left.png"/>
                    <h4>Create new post</h4>
                    <span>Share</span>
                </div>
                <div className="modal-inner-second-2">
                    <div>
                        <img src="/images/add-image-icon.svg"/>
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}