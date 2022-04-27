function PopupWithForm(props) {
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
          className={`popup__form popup__form_type_${props.name}`} name={props.name}
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
