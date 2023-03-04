import { useState } from 'react';
import { toast } from 'react-toastify';
import { IoIosSearch } from 'react-icons/io';
import css from './searchbox.module.scss';

export default function SearchBox({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
        toast.warning('Enter the title of the film to continue searching');
        return;
    }

    onSubmit({ query });
    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />
      <button type="submit" className={css.button}>
        <IoIosSearch className={css.icon} />
      </button>
    </form>
  );
}
