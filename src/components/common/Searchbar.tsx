import { setSearchQuery } from "@/redux/store/recipesSlice";
import { useAppDispatch } from "@/redux/store/store";
import { fetchSearchRecipe } from "@/redux/utils/recipeUtils";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [error, setError] = useState("");
  const [queryText, setQueryText] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (queryText.trim().length > 0) {
      dispatch(fetchSearchRecipe({ queryText, nextPageLink: null }));
      dispatch(setSearchQuery(queryText));
      setQueryText("");
      navigate("/recipes/search");
    } else {
      setError("Please enter search term.");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryText(e.target.value);

    if (e.target.value.length === 0) {
      setError("Please enter search term.");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="query"
        value={queryText}
        name="query"
        placeholder="Search recipe here ..."
        onChange={handleChange}
      />
      <button type="submit" className="search-btn">
        <BsSearch color="#FFF" size={16} />
      </button>
      {error && <span className="error-message">{error}</span>}
    </form>
  );
};

export default Searchbar;
