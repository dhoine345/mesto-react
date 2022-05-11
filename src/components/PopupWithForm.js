import {useEffect} from 'react';

function PopupWithForm(props) {
  useEffect(() => {
    if(!props.isOpen) return;

    function handleEsc(e) {
      if(e.key === "Escape") {
        props.onClose()
      }
    };

    document.addEventListener('keydown', handleEsc);
    return ()=> document.removeEventListener('keydown', handleEsc);
  });

  return (
    <div
    className={`popup popup_type_${props.name}
    ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button button-hover"
          type="button"
          onClick={props.onClose}
        />
        <h2 className="popup__form-title">{props.title}</h2>
        <form
          onSubmit={props.onSubmit}
          className={`popup__form popup__form_type_${props.name}`}
          name={props.name}
          noValidate
        >
          {props.children}
          <button
            className="popup__submit-button"
            type="submit"
          >
            {props.buttonName}
          </button>
        </form>
      </div>
    </div>
  )
};

export default PopupWithForm;
