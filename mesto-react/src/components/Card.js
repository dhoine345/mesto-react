import React from 'react';

const Card = (props) => {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <img className="element__place-photo"
      src={props.card.link}
      onClick={handleClick}
      alt={props.card.name}
      />
      <h2 className="element__place-name">{props.card.name}</h2>
      <div className="element__like-and-counter">
        <button
          className="element__like"
          type="button"
        />
        <span className="element__likes-counter"></span>
      </div>
      <button
        className="element__delete button-hover"
        type="button"
      />
    </article>
  )
};

export default Card;
