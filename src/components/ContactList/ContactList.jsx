import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/operations';
import { selectError, selectVisibleContacts } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';
import { selectLoading } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // const contactsState = useSelector(state => state.contacts.items);
  // const filterState = useSelector(state => state.filter && state.filter.name);

  // const visibleContacts = selectedContacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {loading && !error && <p>Loading...</p>}
      {error && <p>Ooops, something went wrong</p>}
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
