import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(5, 'Number must be at least 5 digits')
    .max(15, 'Number cannot exceed 15 digits')
    .required('Phone number is required'),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" className={styles.input} />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label htmlFor="number">Number</label>
        <Field
          type="text"
          id="number"
          name="number"
          className={styles.input}
        />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
