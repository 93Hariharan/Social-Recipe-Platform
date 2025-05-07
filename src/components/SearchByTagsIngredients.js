import React, { useState } from 'react';

function SearchByTagsIngredients({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim().toLowerCase());
    }
  };

  return (
    <form onSubmit={handleSearch} style={styles.form}>
      <input
        type="text"
        placeholder="Search by tags or ingredients..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Search</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  input: {
    padding: '8px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
    outline: 'none',
  },
  button: {
    padding: '8px 16px',
    width: '300px',
    backgroundColor: '#2575fc',
    color: 'white',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
};

export default SearchByTagsIngredients;
