import propTypes from 'prop-types';
import React from 'react';
import './app.component.stules.css';

const ContactItem = ({ contacts, deleteContact }) => {
  return (
    <ul className="contacts_list">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className="list_item">
            {name}: {number}
          </p>
          <div>
            <button type="submit" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contacts: propTypes.array,
  name: propTypes.string,
  number: propTypes.string,
  id: propTypes.string,
  deletecontact: propTypes.func,
};
