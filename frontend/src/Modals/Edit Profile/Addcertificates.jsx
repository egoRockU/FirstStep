import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

function AddCertificates({
  onClose,
  onSubmit,
  onEdit,
  formIndex,
  initialData,
}) {
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    document: "",
    description: "",
    dateReceived: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });

      setImagePreview(URL.createObjectURL(e.target.files[0]));
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setImagePreview(null);
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
        title: "",
        image: null,
        document: "",
        description: "",
        dateReceived: "",
      });
      setImagePreview(null);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-5 rounded-xl w-1/3">
        <div className="flex justify-between w-full">
        <h2 className="text-xl text-[#444B88]">Add Certificates</h2>
        <IoCloseOutline size={25} onClick={handleCancel} />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label htmlFor="title" className="block text-[#444B88]">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-2 py-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="dateReceived" className="block text-[#444B88]">
              Date Received:
            </label>
            <input
              type="date"
              id="dateReceived"
              name="dateReceived"
              value={
                formData.dateReceived
                  ? new Date(formData.dateReceived)
                      .toISOString()
                      .substring(0, 10)
                  : ""
              }
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-2 py-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-[#444B88]">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-2 py-2 w-full"
            />
          </div>
          <div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Selected Image"
                className="max-w-full h-auto"
              />
            )}
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
              className="border border-[#444B88] rounded-md px-2 py-2 w-full"
              required
              rows={8}
            />
          </div>
          <div className="text-right flex gap-2 justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="px-2 py-2 rounded-md border border-[#444B88]"
            >
              Cancel
            </button>
            {!initialData && (
              <button
                type="submit"
                className="text-[#444B88] bg-[#8B95EE] px-2 py-2 rounded-md"
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

export default AddCertificates;
