import { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        
        setCards(cardsData);
      }).catch(err => {
      console.log(`Ошибка: ${ err }`)
    })
  },[]);

  return (
    <main className="content">

      <section className="profile">
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="Фотография автора."
        />
        <button
          className="profile__avatar-edit"
          type="button"
          aria-label="Edit-button"
          onClick={props.onEditAvatar}
        />
        <div className="profile__info">
          <div className="profile__info-text">
            <h1 className="profile__avatar-name">{userName}</h1>
            <p className="profile__avatar-job">{userDescription}</p>
          </div>
          <button
            className="profile__edit-button button-hover"
            type="button"
            onClick={props.onEditProfile}
          />
        </div>
        <button
          className="profile__add-button button-hover"
          type="button"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="elements">
        {cards.map((card) =>
          <Card card={card} key={card._id} onCardClick={props.onCardClick} />
        )}
      </section>

    </main>
  );
};

export default Main;
