import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ImSpinner } from "react-icons/im";

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
  const [submitting, setSubmitting] = useState(false); // State to track submission process

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
      <div className="bg-white p-5 rounded-md w-80 md:w-1/3 flex flex-col">
        <div className="flex justify-between w-full">
          <h2 className="text-base md:text-xl font-bold text-[#444B88]">Add Certificates</h2>
          <IoCloseOutline size={25} onClick={handleCancel} />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <label htmlFor="title" className="block text-[#444B88] text-sm md:text-lg">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-2 py-2 w-full text-sm md:text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="dateReceived" className="block text-[#444B88] text-sm md:text-lg">
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
              className="border border-[#444B88] rounded-md px-2 py-2 w-full text-sm md:text-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-[#444B88] text-sm md:text-lg">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add more information about this certificate."
              className="border border-[#444B88] rounded-md px-2 py-2 w-full text-sm md:text-lg"
              required
              rows={8}
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
