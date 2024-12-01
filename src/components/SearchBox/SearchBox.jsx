import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onSearchChange }) => {
  return (
    <div>
      <label htmlFor="search" className={styles.searchlabel} >Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={onSearchChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
