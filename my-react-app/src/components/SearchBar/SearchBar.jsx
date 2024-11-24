import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { RiSearch2Line } from "react-icons/ri";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={query}
          className={styles.input}
          name="text"
        />
        <button type="submit" className={styles.btn}>
          Search <RiSearch2Line />
        </button>
      </form>
      <Toaster />
    </header>
  );
}

export default SearchBar;
