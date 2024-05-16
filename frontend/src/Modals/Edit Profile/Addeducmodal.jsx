import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import schoolsSuggestions from "../../suggestions/schools.json";
import { ImSpinner } from "react-icons/im";

function Addeduc({ onClose, onSubmit, onEdit, formIndex, initialData }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    degree: "",
    program: "",
    startDate: "",
    endDate: "",
    grade: "",
  });

  const [suggestedSchools, setSuggestedSchools] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [submitting, setSubmitting] = useState(false); // State to track submission process

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSchoolsChange = (e) => {
    const input = e.target.value;
    setFormData({ ...formData, schoolName: input });

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      setSuggestedSchools([]);
      setShowSuggestions(false);
    } else {
      const suggestions = schoolsSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestedSchools(suggestions);
      setShowSuggestions(suggestions.length > 0);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData({ ...formData, schoolName: suggestion });
    setSuggestedSchools([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && showSuggestions && suggestedSchools.length > 0) {
      e.preventDefault();
      const nextIndex = (selectedSuggestionIndex + 1) % suggestedSchools.length;
      setSelectedSuggestionIndex(nextIndex);
      setFormData({ ...formData, schoolName: suggestedSchools[nextIndex] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(async () => {
      await onSubmit(formData);
      setSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await onEdit(formIndex, formData);
    setSubmitting(false);
    onClose();
  };

  const handleCancel = () => {
    onClose();
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        schoolName: "",
        degree: "",
        program: "",
        startDate: "",
        endDate: "",
        grade: "",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-md w-80 md:w-1/3 flex flex-col">
        <div className="flex w-full justify-between">
          <h2 className="text-base md:text-xl font-bold text-[#444B88]">Add education</h2>
          <IoCloseOutline size={25} onClick={handleCancel} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="schoolName" className="block text-[#444B88] text-sm md:text-lg">
              School Name
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleSchoolsChange}
              onKeyDown={handleKeyDown}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full text-sm md:text-lg"
            />
            <div className="relative pt-1">
              {showSuggestions && (
                <div
                  className="border border-[#444B88] absolute left-0 max-w-[calc(100% - 8px)] bg-white p-1 z-10"
                  style={{
                    width: "calc(100% - 8px)",
                  }}
                >
                  <p className="text-sm text-gray-600">Suggestions:</p>
                  <ul className="suggestions-list max-h-20 overflow-y-auto">
                    {suggestedSchools.map((suggestion, index) => (
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
          </div>
          <div className="mb-4">
            <label htmlFor="degree" className="block text-[#444B88] text-sm md:text-lg">
              Degree
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="Ex. Bachelor or Science, Bachelor of Arts, Senior High, etc"
              value={formData.degree}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full text-sm md:text-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="program" className="block text-[#444B88] text-sm md:text-lg">
              Program
            </label>
            <input
              type="text"
              id="program"
              name="program"
              placeholder="Ex. Computer Science, Information Technology, STEM, etc"
              value={formData.program}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full text-sm md:text-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-[#444B88] text-sm md:text-lg">
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              required
              value={
                formData.startDate
                  ? new Date(formData.startDate).toISOString().substring(0, 10)
                  : ""
              }
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full text-sm md:text-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block text-[#444B88] text-sm md:text-lg ">
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              required
              value={
                formData.endDate
                  ? new Date(formData.endDate).toISOString().substring(0, 10)
                  : ""
              }
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full text-sm md:text-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="grade" className="block text-[#444B88] text-sm md:text-lg">
              Grade:
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full text-sm md:text-lg"
            />
          </div>
          <div className="flex justify-end mb-4">
            <button
              type="button"
              onClick={handleCancel}
              className="border border-[#444B88] text-black px-4 py-2 rounded-md mr-2 text-sm md:text-lg"
            >
              Cancel
            </button>

            {!initialData && (
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#8B95EE] border border-[#444B88] text-white px-4 py-2 rounded-md flex justify-center items-center gap-2 text-sm md:text-lg"
              >
                {submitting ? (
                  <ImSpinner className="animate-spin mr-2" />
                ) : (
                  "Submit"
                )}
              </button>
            )}

            {initialData && (
              <button
                type="button"
                onClick={handleEdit}
                disabled={submitting}
                className="bg-[#8B95EE] border border-[#444B88] text-black px-4 py-2 rounded-md mr-2"
              >
                {submitting ? (
                  <ImSpinner className="animate-spin mr-2" />
                ) : (
                  "Save Changes"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addeduc;
