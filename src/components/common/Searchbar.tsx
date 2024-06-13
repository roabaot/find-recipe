import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  return (
    <form className="search-bar">
      <input type="text" id="query" placeholder="Search recipe here ..." />
      <button className="search-btn">
        <BsSearch color="#FFF" size={16} />
      </button>
    </form>
  );
};

export default Searchbar;
