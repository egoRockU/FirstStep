import React, { useState } from 'react';

const CharacterRef = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    relationship: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-sm w-1/3 flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <h2 className="text-xl text-[#444B88]">Character Reference</h2>
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 cursor-pointer"
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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#444B88]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#444B88]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-[#444B88]">
              Contact Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={handleChange}
              value={formData.phone}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="relationship" className="block text-[#444B88]">
              Position
            </label>
            <input
              type="text"
              name="relationship"
              id="relationship"
              onChange={handleChange}
              value={formData.relationship}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-[#444B88]">
              Company
            </label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={formData.description}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            ></textarea>
          </div>
          <div className="flex justify-end mb-4">
          <button
              type="button"
              onClick={onClose}
              className="border border-[#444B88] text-black px-4 py-2 rounded-md"

            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#8B95EE] border border-[#444B88] text-black px-4 py-2 rounded-md ml-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CharacterRef;
