import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
// import { fetchContacts } from '../../redux/contacts/operations';
// import { useEffect } from 'react';
// import { selectLoading } from '../../redux/contacts/selectors';
// import { selectContacts } from '../../redux/tasks/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const contacts = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  // const contactsState = useSelector(state => state.contacts.items);
  // const filterState = useSelector(state => state.filter && state.filter.name);

  // const visibleContacts = selectedContacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={id => {
              dispatch(deleteContact(id));
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
