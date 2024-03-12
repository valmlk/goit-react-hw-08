import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Please, enter email'),
  password: Yup.string().required('No password provided.').min(8, 'Too short'),
});

export const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div>
      {/* <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form> */}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
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
          <button type='submit'>Log In</button>
        </Form>
      </Formik>
    </div>
  );
};
