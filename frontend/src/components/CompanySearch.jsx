import {useState} from "react"; 

const CompanySearch = ({searchCompanies}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  function handleChange(evt) {
    const {value} = evt.target;
    setSearchTerm(value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setIsSearching(true);
    setSearchTerm("");
    await searchCompanies(searchTerm);
    setIsSearching(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search By Name
        <input
          type="text"
          required
          value={searchTerm}
          placeholder="Davis"
          onChange={handleChange}
        />
      </label>
      <button disabled={isSearching} type="submit">Go!</button>
    </form>
  );
};

export default CompanySearch;
