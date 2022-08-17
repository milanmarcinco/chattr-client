import { useRef } from "react";
import useStore from "../../store";
import SearchIcon from "../../assets/search.svg";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);

  const handleFocusInput = () => inputRef && inputRef.current?.focus();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchTerm(event.currentTarget.value.toLocaleLowerCase());

  return (
    <div className={styles.searchBar} onClick={handleFocusInput}>
      <SearchIcon />
      <input ref={inputRef} onChange={handleChange} value={searchTerm} className={styles.input} type="text" />
    </div>
  );
};

export default SearchBar;
