import {useRef, useState} from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const inputRef = useRef()
  const [name, setName] = useState('');

  const handleChangeName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace({
      name,
      link: inputRef.current.value
    });
  };

  return (
    <PopupWithForm
    isOpen={props.isOpen}
    onClose={props.onClose}
    name="add-card"
    title="Новое место"
    buttonName={props.renderLoading ? 'Сохранение...' : 'Создать'}
    onSubmit={handleSubmit}
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
      onChange={handleChangeName}
      value={name || ''}
    />
    <span className="popup__error input-place-name-error"></span>
    <input
      type="url"
      name="link"
      className="popup__form-input popup__container-form-input_type_link"
      placeholder="Ссылка на картинку"
      required
      id="input-place-url"
      ref={inputRef}
    />
    <span className="popup__error input-place-url-error"></span>
    </PopupWithForm>
  )
};

export default AddPlacePopup;
