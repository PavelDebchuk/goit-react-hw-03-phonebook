import { Component } from 'react';

import './app.component.stules.css';
import Form from './Form';
import ContactItem from './ContactsItem';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const isNameExist = contacts.some(contact => {
      return contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase();
    });
    if (!isNameExist) {
      this.setState(prevState => ({
        contacts: [...contacts, data],
      }));
    } else {
      alert(`${data.name} is already in contacts`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  visibleContactCards = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContactCards = this.visibleContactCards();
    const { filter } = this.state;
    return (
      <section className="block">
        <h2>Name</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter onChangeFilter={this.changeFilter} filter={filter} />
        <ContactItem
          contacts={visibleContactCards}
          deleteContact={this.deleteContact}
        />
      </section>
    );
  }
}
export default App;
