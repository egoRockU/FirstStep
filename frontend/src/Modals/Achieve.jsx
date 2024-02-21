import React, { useState } from 'react';

function Involvements({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    organization: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      type: '',
      organization: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };
  const handleCancel = () => {
    onClose();
    setFormData({
        title: '',
        type: '',
        organization: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
    });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-xl w-1/4">
        <h2 className="text-2xl font-semibold mb-4">Add Involvements</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block font-semibold">Type:</label>
            <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="organization" className="block font-semibold">Organization/Company Name:</label>
            <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block font-semibold">Location:</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block font-semibold">Start Date:</label>
            <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block font-semibold">End Date:</label>
            <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full" />
          </div>
          <div className="text-right">
          <button type="button" onClick={handleCancel} className="mr-4 text-gray-600 hover:text-gray-800 focus:outline-none">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
          </div>
        </form>
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Involvements;
