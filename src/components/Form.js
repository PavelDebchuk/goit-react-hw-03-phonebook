import React, { Component } from 'react';
import { nanoid } from 'nanoid';
class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  inputValue = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.setState(prevState => ({
      id: nanoid(),
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputValue}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <input
            className="input"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputValue}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
