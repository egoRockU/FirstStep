import React, { useState, useEffect } from "react";
import { ImSpinner } from "react-icons/im";


const CharacterRef = ({
  onClose,
  onSubmit,
  onEdit,
  formIndex,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    contactNum: "",
    email: "",
    website: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(async () => {
      await onSubmit(formData);
      setSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(formIndex, formData);
    onClose();
  };

  const [submitting, setSubmitting] = useState(false); // State to track submission process


  const handleCancel = () => {
    onClose();
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: "",
        position: "",
        contactNum: "",
        email: "",
        website: "",
      });
    }
  };

  // if (!isOpen) return null;

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
            <label htmlFor="relationship" className="block text-[#444B88]">
              Position
            </label>
            <input
              type="text"
              name="position"
              id="position"
              onChange={handleChange}
              value={formData.position}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNum" className="block text-[#444B88]">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNum"
              id="contactNum"
              onChange={handleChange}
              value={formData.contactNum}
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
            <label htmlFor="website" className="block text-[#444B88]">
              Website
            </label>
            <input
              name="website"
              id="website"
              onChange={handleChange}
              value={formData.website}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            ></input>
          </div>
          <div className="flex justify-end gap-2 mb-4">
            <button
              type="button"
              onClick={handleCancel}
              className="border border-[#444B88] text-black px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            {!initialData && (
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#8B95EE] border border-[#444B88] text-white px-4 py-2 rounded-md flex justify-center items-center gap-2"
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
};

export default CharacterRef;
