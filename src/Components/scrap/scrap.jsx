import SearchBar from "../SearchBar";

export default function Scrap(){
  const handleSearchQuery = (query) => {
    console.log("Search Query:", query);
  }
  return(
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <SearchBar onSearch={handleSearchQuery} />
  </div>
  );
} 