// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  // const dispatch = useDispatch()

  return (
    <li className={css.item}>
      <p className={css.element}>{name}</p>
      <p className={css.element}>{number}</p>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
