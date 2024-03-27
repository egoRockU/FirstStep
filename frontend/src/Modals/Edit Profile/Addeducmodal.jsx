import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Addeduc({ onClose, onSubmit, onEdit, formIndex, initialData }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    degree: "",
    program: "",
    startDate: "",
    endDate: "",
    grade: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(formIndex, formData);
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
      <div className="bg-white p-8 rounded-sm w-1/3 flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <h2 className="text-xl text-[#444B88]">Add education</h2>
          <IoCloseOutline size={25} onClick={handleCancel} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="schoolName" className="block text-[#444B88]">
              School Name
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="degree" className="block text-[#444B88]">
              Degree
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="program" className="block text-[#444B88]">
              Program
            </label>
            <input
              type="text"
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-[#444B88]">
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
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block text-[#444B88]">
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
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="grade" className="block text-[#444B88]">
              Grade:
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="flex justify-end mb-4">
            
            <button
              type="button"
              onClick={handleCancel}
              className="border border-[#444B88] text-black px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>

            {!initialData && (
              <button
                type="submit"
                className="bg-[#8B95EE] border border-[#444B88] text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            )}
            {initialData && (
              <button
                type="button"
                onClick={handleEdit}
                className="bg-[#8B95EE] border border-[#444B88] text-black px-4 py-2 rounded-md mr-2"
              >
                Save Changes
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addeduc;
