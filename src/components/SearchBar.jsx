import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState({ name:''});

  const handleInput = (e) => {
    setInput((prev) => {
      return{
        ...prev, [e.target.name]: e.target.value,
      };
    })
    onSearch({[e.target.name]: e.target.value})
  }

  
  return (
    <div className="searchBar">
      <label>Search</label><br />
      <input className="inputBar" name="name" type="search" value={input.name} onChange={handleInput} />
    </div>
  )
}

export default SearchBar;