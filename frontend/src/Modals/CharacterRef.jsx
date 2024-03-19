import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

function CharacterRef({ onClose, onSubmit, onEdit, formIndex, initialData }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    contact: "",
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

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: "",
        position: "",
        contact: "",
        email: "",
        website: "",
      });
    }
  };
  

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-sm w-1/3 flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <h2 className="text-xl text-[#444B88]">Add Character Reference</h2>
          <IoCloseOutline size={25} onClick={handleCancel} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="schoolName" className="block text-[#444B88]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="degree" className="block text-[#444B88]">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-[#444B88]">
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="startDate" className="block text-[#444B88]">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-[#444B88] rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block text-[#444B88]">
              Website
            </label>
            <input
              type="date"
              id="website"
              name="website"
              required
              value={formData.website}
              onChange={handleChange}
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

export default CharacterRef;
