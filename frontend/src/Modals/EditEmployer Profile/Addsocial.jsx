import React, { useState, useEffect } from "react";
import Select from "react-select";
import SocialIcon from "../../Components/SocialIcon";

function SocialMediaLinks({
  onClose,
  onSubmit,
  onEdit,
  formIndex,
  initialData,
}) {
  const [formData, setFormData] = useState({
    platform: "",
    link: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (selectedOption) => {
    setFormData({ ...formData, platform: selectedOption.value });
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
        platform: "",
        link: "",
      });
    }
  };

  const options = [
    { value: "facebook", label: <SocialIcon platform="facebook" /> },
    { value: "twitter", label: <SocialIcon platform="twitter" /> },
    { value: "youtube", label: <SocialIcon platform="youtube" /> },
    { value: "linkedin", label: <SocialIcon platform="linkedin" /> },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="w-[700px] mx-4 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Social Media Links
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <Select
                options={options}
                onChange={handleChange}
                value={options.find(
                  (option) => option.value === formData.platform
                )}
                placeholder="Select Platform"
                className="p-2 focus:outline-none rounded-md w-60 text-sm"
                isSearchable={false}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    borderColor: "#444B88 ", 
                  }),
                }}
              />
            </div>

            <div>
              <input
                type="text"
                id="link"
                name="link"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                placeholder="Enter Link"
                className="p-2 border-2 border-[#444B88] focus:outline-none focus:border-black-500 rounded-md w-96"
              />
            </div>
          </div>
          <div className="text-right">
            {initialData && (
              <button
                type="button"
                onClick={handleEdit}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Edit
              </button>
            )}
            <button
              type="button"
              onClick={handleCancel}
              className="border-2 border-[#444B88] px-4 py-2 rounded-lg text-white-600 hover:text-black-800 mr-2"
            >
              Cancel
            </button>
            {!initialData && (
              <button
                type="submit"
                className="border-2 border-[#444B88] bg-[#8B95EE] px-4 py-2 rounded-lg text-white hover:bg-[#6F77B5]"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
