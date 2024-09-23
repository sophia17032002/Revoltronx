import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all"); 

  const handleSearch = async () => {
    if (!query) return; 
    setIsLoading(true); 
    try {
      const response = await axios.get(
        `http://localhost:5000/search?query=${query}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  // Filter results based on the selected filter type
  const filteredResults = results.filter((result) => {
    if (filter === "all") return true;
    switch (filter) {
      case "youtube":
        return result.type === "video"; 
      case "book":
        return result.type === "book"; 
      case "academic":
        return result.type === "academic"; 
      case "blog":
        return result.type === "post"; 
      default:
        return true;
    }
  });

  return (
    <div className="app">
      <h1>Search App</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      {/* Filter Options */}
      <div className="filter-container">
        <label>Filter by:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="youtube">YouTube</option>
          <option value="book">Book</option>
          <option value="academic">Academic Papers</option>
          <option value="blog">Blogs</option>
        </select>
      </div>

      <SearchResults results={filteredResults} isLoading={isLoading} />
    </div>
  );
};

export default App;
