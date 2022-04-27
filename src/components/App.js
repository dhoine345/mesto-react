import { useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setisAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setisEditAvatarPopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="App page">
      <Header className="header" />
      <Main className="content"
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
      />
      <Footer className="footer" />

      <PopupWithForm
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      name="edit-profile"
      title="Редактировать профиль"
      buttonName="Сохранить"
      >
      <input
        type="text"
        name="name"
        className="popup__form-input popup__form-input_type_name"
        required
        minLength="2"
        maxLength="40"
        id="input-name"
        placeholder="Имя"
      />
      <span className="popup__error input-name-error"></span>
      <input
        type="text"
        name="job"
        className="popup__form-input popup__form-input_type_job"
        required
        minLength="2"
        maxLength="200"
        id="input-job"
        placeholder="Занятие"
      />
      <span className="popup__error input-job-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-card"
        title="Новое место"
        buttonName="Создать"
      >
        <input
          type="text"
          name="place-name"
          className="popup__form-input popup__container-form-input_type_place"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          id="input-place-name"
        />
        <span className="popup__error input-place-name-error"></span>
        <input
          type="url"
          name="link"
          className="popup__form-input popup__container-form-input_type_link"
          placeholder="Ссылка на картинку"
          required
          id="input-place-url"
        />
        <span className="popup__error input-place-url-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="add-card"
        title="Обновить Аватар"
        buttonName="Сохранить"
      >
        <input
          type="url"
          name="avatar"
          className="popup__form-input popup__container-form-input_type_avatar"
          placeholder="Ссылка на фото аватара"
          required
          id="input-avatar-url"
        />
        <span className="popup__error input-avatar-url-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="delete-element"
        title="Вы уверены?"
        buttonName="Да"
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
};

export default App;
