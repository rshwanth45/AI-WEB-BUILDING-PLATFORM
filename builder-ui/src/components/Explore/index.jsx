import React, { useState, useEffect } from "react";
import TemplateCard from "./TemplateCard";
import SearchBar from "./SearchBar";
import templatesData from "../../data/templates.json"; // Adjust the path as needed

const Explore = () => {
  const [templates, setTemplates] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setTemplates(templatesData);
    setFilteredTemplates(templatesData);
    // Extracting unique categories from templatesData
    const uniqueCategories = [
      ...new Set(templatesData.map((template) => template.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterTemplates(event.target.value, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    filterTemplates(searchTerm, event.target.value);
  };

  const filterTemplates = (searchTerm, category) => {
    let filtered = templates.filter((template) =>
      template.heading.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category !== "All") {
      filtered = filtered.filter((template) => template.category === category);
    }

    setFilteredTemplates(filtered);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Explore Templates</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
        <div className="mt-4 md:mt-0">
          <label htmlFor="category" className="mr-2 font-semibold">
            Filter by Category:
          </label>
          <select
            id="category"
            className="border border-gray-300 rounded-md px-2 py-1"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
