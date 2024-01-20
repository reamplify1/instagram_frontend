import React from 'react';
import { END_POINT } from '@/app/config/EndPoint';
import { useState,useEffect  } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PostEditor from './PostEditor/PostEditor';
import { getMyComments, CreateComment, deleteComment, appendMyComments } from "@/app/store/slices/commentSlice";


export default function ModalDetail({ close, selectedPost, userInfo, onPostEdit, onPostDelete }) {

    // const currentUser = useSelector((state) => state.auth.currentUser)
    const dispatch = useDispatch()
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedDescription, setEditedDescription] = useState(selectedPost.description);


    const handleEditClick = () => {
      setIsModalOpen(true);
    };

    const handleEdit = () => {
      onPostEdit(selectedPost.id, editedDescription);
      setIsModalOpen(false);
    };
  
    const handleDelete = () => {
      onPostDelete(selectedPost.id);
      setIsModalOpen(false);
    };
    
    const Update = () => {
      const form = new FormData();
      if(image){
        form.append('image', selectedFile);
        form.append('description', caption)
        form.append('id',post.id)
        dispatch(editPost(form))
        // console.log(`form: ${form}`);
        closeModal()
      }    
    }

    useEffect(() => {
      const didMount = async () => {
        // Включите вашу логику здесь
        await dispatch(getMyComments(selectedPost.id));
      };
  
      didMount(); // Вызываете вашу функцию
  
      // Если вам нужно что-то выполнить при unmount компонента,
      // например, отменить запрос, вы можете вернуть функцию очистки
      return () => {
        // Ваш код очистки, если это необходимо
      };
    }, [dispatch, selectedPost.id]);
  

    const comments = useSelector((state) => state.comment.comments)
    // const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    console.log('selected', selectedPost)
    const сommentsPost = (event) => {
      setNewComment(event.target.value);
    };
  
    const сommentSubmit = () => {
      if (newComment.trim() !== '') {
          dispatch(appendMyComments ({ comment: { user: userInfo.username, text: newComment } }));
          setNewComment('');
          // dispatch(appendMyComments({ comment: { user: userInfo.username, text: newComment } }));
          // dispatch(getMyComments(selectedPost.id)); // Обновляем комментарии после отправки нового комментария
      }
  };

    const removeComment = (commentId, index) => {
      console.log('Removing comment with ID:', commentId);
      console.log('From post with ID:', selectedPost.id);
      dispatch(deleteComment(commentId, selectedPost.id))
      // Удаляем комментарий из Redux state, не требуется локального состояния
    };

  return (
    <div>
      <div className="modal-detail">
        <div className="modal-detail-backdrop" onClick={() => close()}></div>
            <div className='modal-detail-inner'>
                <div className="modal-detail-inner-left">
                    {/* <img src={selectedPost.url} alt=""/> */}
                    <img src={`${END_POINT}${selectedPost.image}`} alt=""/>
                </div>
                <div className='modal-detail-inner-right'>
                    <div>
                        {selectedPost && selectedPost.User && <h4>{selectedPost.User.username}</h4>}
                        {/* <h4>{userInfo.username}</h4> */}
                        {/* <h4>{currentUser.username}</h4> */}
                        <p>{selectedPost.description}</p>
                    </div>
                   <div className='comments'>
                    {comments.map((comment, index) => (
                        <div key={index}>
                        <p>{comment.user}:</p> {comment.text}
                        <button onClick={() => removeComment(comment.id, index)}>Удалить</button>
                        </div>
                        ))}
                    </div>
                   <div className='add-comments'>
                        <input type="text" value={newComment} onChange={сommentsPost}/>
                        <button onClick={сommentSubmit}>Send</button>
                   </div>
                   <button onClick={handleEditClick}>Edit/Delete Post</button>
                   {isModalOpen && (
                    <div className="modal">
                      <h3>Edit or Delete Post</h3>
                      <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                      <button onClick={handleEdit}>Edit</button>
                      <button onClick={handleDelete}>Delete</button>
                      <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                  )}
                </div>
            </div>

      </div>
    </div>
  );
}