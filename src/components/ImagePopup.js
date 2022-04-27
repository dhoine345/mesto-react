import React from 'react';

const ImagePopup = ({card, onClose}) => {

  return (
    <div className={`popup popup_photo ${card._id && 'popup_opened'}`}>
      <div className="popup__photo-container">
        <button
          className="popup__close-button button-hover"
          type="button"
          onClick={onClose}
        />
        <img
          className="popup__photo"
          src={card.link}
        />
        <figcaption className="popup__photo-name">{card.name}</figcaption>
      </div>
    </div>
  );
}

export default ImagePopup;
