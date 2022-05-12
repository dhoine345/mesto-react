import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({onAddPlace, isOpen, onClose, renderLoading}) {
  //const inputRef = useRef()
  const [name, setName] = useState('');
  const [url, setUrl] = useState('')

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeUrl = (e) => setUrl(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name,
      link: url
    });
  };

  useEffect(() => {
      setName('')
      setUrl('')
  }, [isOpen])

  /*Я видимо что-то не понимаю. С useEffect и зависимостью от пропса isOpen поля обновляются при каждом изменении данного пропса, а не только после успешной отправки запроса.
  При обнулении именно при сабмите формы получается ожидаемое пользователем поведение.
  И не нашел в чек-листе требования именно такого поведения полей формы. Почему именно критическое замечание?*/

  return (
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    name="add-card"
    title="Новое место"
    buttonName={renderLoading ? 'Сохранение...' : 'Создать'}
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
      value={name}
    />
    <span className="popup__error input-place-name-error"></span>
    <input
      type="url"
      name="link"
      className="popup__form-input popup__container-form-input_type_link"
      placeholder="Ссылка на картинку"
      required
      id="input-place-url"
      onChange={handleChangeUrl}
      value={url}
    />
    <span className="popup__error input-place-url-error"></span>
    </PopupWithForm>
  )
};

export default AddPlacePopup;
