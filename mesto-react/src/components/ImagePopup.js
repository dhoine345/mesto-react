import React from 'react';

const ImagePopup = (props) => {

  return (
    <div className={`popup popup_photo ${props.card._id && 'popup_opened'}`}>
      <div className="popup__photo-container">
        <button
          className="popup__close-button button-hover"
          type="button"
          onClick={props.onClose}
        />
        <img
          className="popup__photo"
          src={props.card.link}
        />
        <figcaption className="popup__photo-name">{props.card.name}</figcaption>
      </div>
    </div>
  );
}

export default ImagePopup;
