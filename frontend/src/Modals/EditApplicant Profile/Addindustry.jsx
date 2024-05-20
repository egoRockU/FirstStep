import React, { useState } from "react";

function AddIndustries({ onClose, suggestions, onSubmit }) {
  const [industries, setIndustries] = useState("");
  const [suggestedIndustries, setSuggestedIndustries] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const handleIndustriesChange = (e) => {
    const userInput = e.target.value;
    setIndustries(userInput);

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      setSuggestedIndustries([]);
      setShowSuggestions(false);
    } else {
      const industrySuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(userInput.toLowerCase())
      );
      setSuggestedIndustries(industrySuggestions);
      setShowSuggestions(industrySuggestions.length > 0);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setIndustries(suggestion);
    setSuggestedIndustries([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && showSuggestions && suggestedIndustries.length > 0) {
      e.preventDefault();
      const nextIndex =
        (selectedSuggestionIndex + 1) % suggestedIndustries.length;
      setSelectedSuggestionIndex(nextIndex);
      setIndustries(suggestedIndustries[nextIndex]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(industries);

    onClose();
    console.log("Industries:", industries);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="w-[600px] mx-4 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-base md:text-xl font-semibold mb-4 text-gray-800">
          Add Industries
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Web Developer"
            value={industries}
            onChange={handleIndustriesChange}
            onKeyDown={handleKeyDown}
            className="p-2 border-2 border-[#444B88] focus:outline-none focus:border-black-500 rounded-md text-sm md:text-lg"
          />
          <div className="relative">
            {showSuggestions && (
              <div
                className="border border-[#444B88] absolute left-0 max-w-[calc(100% - 8px)] bg-white p-1 z-10"
                style={{ width: "calc(80% - 8px)" }}
              >
                <p className="text-sm text-gray-600">Suggestions:</p>
                <ul className="suggestions-list max-h-20 overflow-y-auto">
                  {suggestedIndustries.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={`cursor-pointer hover:bg-gray-100 p-2 rounded-md ${
                        index === selectedSuggestionIndex ? "bg-gray-200" : ""
                      }`}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="border-2 border-[#444B88] px-4 py-2 rounded-lg text-white-600 hover:text-black-800 mr-2 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border-2 border-[#444B88] bg-[#8B95EE] px-4 py-2 rounded-lg text-white hover:bg-[#6F77B5] text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddIndustries;
