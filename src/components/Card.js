import React from 'react';

const Card = ({card, onCardClick}) => {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img className="element__place-photo"
      src={card.link}
      onClick={handleClick}
      alt={card.name}
      />
      <h2 className="element__place-name">{card.name}</h2>
      <div className="element__like-and-counter">
        <button
          className="element__like"
          type="button"
        />
        <span className="element__likes-counter">{card.likes.length}</span>
      </div>
      <button
        className="element__delete button-hover"
        type="button"
      />
    </article>
  )
};

export default Card;
