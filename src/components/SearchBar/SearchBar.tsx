import React, { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { RiSearch2Line } from "react-icons/ri";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) {
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
        />
        <button type="submit" className={styles.btn}>
          Search <RiSearch2Line />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
