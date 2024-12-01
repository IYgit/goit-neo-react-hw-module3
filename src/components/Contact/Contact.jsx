import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contact}>
      <p>
        <strong>{contact.name}</strong>: {contact.number}
      </p>
      <button onClick={onDelete} className={styles.button}>Delete</button>
    </div>
  );
};

export default Contact;
