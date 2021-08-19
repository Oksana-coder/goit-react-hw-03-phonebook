import React, { Component } from 'react';
import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };
  
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  
  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
      <label className="contact-form__label">
        Name
        <input
          type="text"
          className="contact-form__input"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className="contact-form__label">
        Number
        <input
          type="tel"
          className="contact-form__input"  
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
        <button
          type="submit"
          className="contact-form__btn"
        >
        Add contact
      </button> 
    </form>
    )
  }
}

export default ContactForm;