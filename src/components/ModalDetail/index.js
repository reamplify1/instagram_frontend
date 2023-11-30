import React from 'react';
import { useState } from 'react';
export default function ModalDetail({ close, selectedPost, userInfo }) {

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
  
    const сommentsPost = (event) => {
      setNewComment(event.target.value);
    };
  
    const сommentSubmit = () => {
      if (newComment.trim() !== '') {
        setComments([...comments, { user: userInfo.username, text: newComment }]);
        setNewComment('');
      }
    };

  return (
    <div>
      <div className="modal-detail">
        <div className="modal-detail-backdrop" onClick={() => close()}></div>
            <div className='modal-detail-inner'>
                <div className="modal-detail-inner-left">
                    <img src={selectedPost.url} alt=""/>
                </div>
                <div className='modal-detail-inner-right'>
                    <div>
                        <h4>{userInfo.username}</h4>
                        <p>{selectedPost.description}</p>
                    </div>
                   <div className='comments'>
                    {comments.map((comment, index) => (
                        <div key={index}>
                        <p>{comment.user}:</p> {comment.text}
                        </div>
                        ))}
                    </div>
                   <div className='add-comments'>
                        <input type="text" value={newComment} onChange={сommentsPost}/>
                        <button onClick={сommentSubmit}>Send</button>
                   </div>

                </div>
            </div>

      </div>
    </div>
  );
}