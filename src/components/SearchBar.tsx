import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../store/slices/todoSlice";

const SearchBar: FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // Debounce for search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(setSearchQuery(query));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query, dispatch]);

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-text-light"
      />
      <input
        type="text"
        className="w-full pl-10 pr-4 py-3 rounded-lg bg-theme-surface-light 
                   border-2 border-theme-secondary/20 focus:border-theme-primary
                   focus:outline-none transition-colors text-theme-text
                   placeholder-theme-text-light"
        placeholder="Search tasks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
