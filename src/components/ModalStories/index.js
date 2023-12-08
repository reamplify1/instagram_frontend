import React from 'react';

export default function ModalStories({ onClose, stories }) {
  return (
    <div>
      <div className="modal-stories">
        <div className="modal-stories-backdrop" onClick={onClose}>
          <div className="modal-stories-inner">
            {stories &&
                stories.map((story, index) => (
                    <div key={index}>
                    <img src={story.story} alt={`Story ${index + 1}`} />
                    </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}