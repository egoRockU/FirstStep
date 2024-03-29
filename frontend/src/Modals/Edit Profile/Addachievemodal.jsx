import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";


function Addachievemodal({
  onClose,
  onSubmit,
  onEdit,
  formIndex,
  initialData,
}) {
  const [formData, setFormData] = useState({
    title: "",
    typeOfActivity: "",
    organizationOrCompanyName: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
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
    setFormData(formData);
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
        title: "",
        typeOfActivity: "",
        organizationOrCompanyName: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-sm w-1/3 ">
        <div className="w-full flex justify-between">
        <h2 className="text-xl text-[#444B88]">
          Add Activities and Involvements
        </h2>
        <IoCloseOutline size={25} onClick={handleCancel} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-[#444B88]">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-[#444B88]">
              Type:
            </label>
            <input
              type="text"
              id="typeOfActivity"
              name="typeOfActivity"
              value={formData.typeOfActivity}
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="organization" className="block text-[#444B88]">
              Organization/Company Name:
            </label>
            <input
              type="text"
              id="organization"
              name="organizationOrCompanyName"
              value={formData.organizationOrCompanyName}
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-[#444B88]">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
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
              value={
                formData.startDate
                  ? new Date(formData.startDate).toISOString().substring(0, 10)
                  : ""
              }
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
              required
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
              value={
                formData.endDate
                  ? new Date(formData.endDate).toISOString().substring(0, 10)
                  : ""
              }
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-[#444B88]">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="text-right">
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
                className="bg-[#8B95EE] border border-[#444B88] text-black px-4 py-2 rounded-md"
              >
                Save
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
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Addachievemodal;
