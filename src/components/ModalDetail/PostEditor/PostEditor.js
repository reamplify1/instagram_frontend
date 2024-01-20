import React, { useState } from 'react';

const PostEditor = ({ post, onEdit, onDelete, onClose }) => {
  const [editedDescription, setEditedDescription] = useState(post.description);

  const handleEdit = () => {
    onEdit(post.id, editedDescription);
    onClose();
  };

  const handleDelete = () => {
    onDelete(post.id);
    onClose();
  };

  return (
    <div>
      <h3>Edit or Delete Post</h3>
      <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PostEditor;