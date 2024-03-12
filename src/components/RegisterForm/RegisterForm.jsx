import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';


const registerSchema = Yup.object().shape({
  name: Yup.string().required('Please, enter your name'),
  email: Yup.string().email().required('Please, enter email'),
  password: Yup.string().required('No password provided').min(8, 'Too short'),
});

export const RegisterForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    
    <div>
    <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
        <div className={css.label}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field  type="text" name="name" id={nameFieldId}></Field>
            <ErrorMessage className={css.error} name="name" component="span"></ErrorMessage>
          </div>
          <div className={css.label}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field  type="text" name="email" id={emailFieldId}></Field>
            <ErrorMessage className={css.error} name="email" component="span"></ErrorMessage>
          </div>
          <div className={css.label}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field type="password" name="password" id={passwordFieldId}></Field>
            <ErrorMessage className={css.error} name="password" component="span"></ErrorMessage>
          </div>
          <button type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  );
};
