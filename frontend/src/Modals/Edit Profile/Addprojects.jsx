import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { projectImagesUpload } from "../../utils/projectimageUpload";
import { editProject } from "../../utils/projectimageEdit";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Addprojects({ onClose, onSubmit, onEdit, formIndex, initialData }) {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false); // Define loading state here

  const [formData, setFormData] = useState({
    projectTitle: "",
    subTitle: "",
    technologiesUsed: "",
    startDate: "",
    endDate: "",
    description: "",
    githubLink: "",
    projectLink: "",
    previewImages: [],
  });
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setImagePreviews(initialData.previewImages);
      console.log(initialData);
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const previews = [];
      for (let i = 0; i < Math.min(files.length, 5); i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result);
          if (previews.length === Math.min(files.length, 5)) {
            setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  // const handleDeleteImage =  async  (index) => {
  //   try {
  //     const updatedPreviews = [...imagePreviews];
  //     updatedPreviews.splice(index, 1);
  //     setImagePreviews(updatedPreviews);

  //     const updatedFormData = {
  //       ...formData,
  //       previewImages: formData.previewImages.filter((_, i) => i !== index),
  //     };
  //     setFormData(updatedFormData);
  //   } catch (error) {
  //     console.error("Error deleting image:", error);
  //   }
  // };

  const handleDeleteImage = (index) => {
    try {
      const updatedPreviews = [...imagePreviews];
      updatedPreviews.splice(index, 1);
      setImagePreviews(updatedPreviews);

      const updatedFormData = {
        ...formData,
        previewImages: formData.previewImages.filter((_, i) => i !== index),
      };
      setFormData(updatedFormData);
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Failed to delete. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    try {
      toast.info("Please wait for uploading.");

      console.log("Uploading image.");
      const imageUrls = await projectImagesUpload(imagePreviews);

      console.log("Image URLs:", imageUrls);

      const updatedFormData = {
        ...formData,
        previewImages: imageUrls,
      };

      console.log("Calling onSubmit with updated formData...");
      if (initialData) {
        onSubmit({ ...initialData, ...updatedFormData });
      } else {
        onSubmit(updatedFormData);
      }

      console.log("Resetting formData...");
      setFormData({
        projectTitle: "",
        subTitle: "",
        technologiesUsed: "",
        startDate: "",
        endDate: "",
        description: "",
        githubLink: "",
        projectLink: "",
      });

      toast.success("Successfully saved!");
    } catch (error) {
      console.error("Error uploading project images:", error);
      toast.error("Failed to save. Please try again.");
    }
  };

  // const handleEdit = async (e) => {
  //   e.preventDefault();
  //   onEdit(formIndex, formData);
  //   onClose();

  //   try {
  //     const selectedImageUrls = [];
  //     imagePreviews.forEach((preview, index) => {
  //       if (formData.previewImages.includes(preview)) {
  //         selectedImageUrls.push(formData.previewImages[index]);
  //       }
  //     });

  //     for (const imageUrl of selectedImageUrls) {
  //       await deleteImageFromFirebase(imageUrl, setImagePreviews, imagePreviews);
  //     }
  //   } catch (error) {
  //     console.error("Error deleting images from Firebase:", error);
  //   }
  // };
  const handleEdit = async (e) => {
    e.preventDefault();

    // Set a loading state to indicate that the process is ongoing
    setLoading(true);

    try {
      // Show a toast to remind the user to wait for uploading
      toast.info("Please wait!");

      // Call the editProject function passing necessary parameters
      await editProject(
        initialData,
        formData,
        imagePreviews,
        onEdit,
        onClose,
        formIndex
      );

      toast.success("Changes saved successfully!");
    } catch (error) {
      console.error("Error editing project:", error);
      toast.error("Failed to save changes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 py-5">
      <div className="bg-white w-2/5 h-full p-4 overflow-y-scroll shadow-lg rounded-md">
        <div className="flex w-full justify-between">
          <h1 className="text-lg text-black">Add Projects</h1>
          <IoMdClose size={25} onClick={handleCancel} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 px-3">
            <div className="flex items-center">
              <h1 className="mr-2">Preview Images:</h1>
              <p>{imagePreviews.length}/5</p>
            </div>
            <div className="grid grid-cols-3 gap-12">
              {imagePreviews.map((preview, index) => (
                <div
                  key={index}
                  className="w-full relative"
                  style={{ width: "170px", height: "150px" }}
                >
                  <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <IoMdClose
                    size={25}
                    onClick={() => handleDeleteImage(index)}
                    className="absolute top-1 right-1 m-1 text-black bg-white rounded-full p-1 cursor-pointer"
                  />
                </div>
              ))}

              {imagePreviews.length < 5 && (
                <label
                  htmlFor="imginput"
                  className="w-[190px] h-[140px] cursor-pointer "
                >
                  <div className="w-full h-full flex justify-center items-center border-2 border-[#8B95EE] rounded-lg">
                    <IoMdAdd size={15} color="8B95EE" />
                  </div>
                  <input
                    type="file"
                    id="imginput"
                    accept="image/*"
                    hidden
                    multiple
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>
            <div className="flex flex-col mt-3 gap-y-5">
              <div>
                <h1 className="text-lg text-[#444B88]">Project Title</h1>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  className="w-full border border-[#444B88] py-2 px-2 rounded-md"
                  required
                />
              </div>
              <div>
                <h1 className="text-lg text-[#444B88]">Subtitle</h1>
                <input
                  type="text"
                  name="subTitle"
                  value={formData.subTitle}
                  onChange={handleChange}
                  className="w-full border border-[#444B88] py-2 px-2 rounded-md"
                  required
                />
              </div>
              <div>
                <h1 className="text-lg text-[#444B88]">Technologies Used</h1>
                <input
                  type="text"
                  name="technologiesUsed"
                  value={formData.technologiesUsed}
                  onChange={handleChange}
                  className="w-full border border-[#444B88] py-2 px-2 rounded-md"
                  required
                />
              </div>
              <div className="flex w-full justify-between gap-5">
                <div className="flex flex-col w-1/2">
                  <h1 className="text-lg text-[#444B88]">Start Date</h1>
                  <input
                    type="date"
                    name="startDate"
                    value={
                      formData.startDate
                        ? new Date(formData.startDate)
                            .toISOString()
                            .substring(0, 10)
                        : ""
                    }
                    onChange={handleChange}
                    className="text-lg  border border-[#444B88] rounded-md px-2 py-2"
                    required
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <h1 className="text-lg text-[#444B88]">End Date</h1>
                  <input
                    type="date"
                    name="endDate"
                    value={
                      formData.endDate
                        ? new Date(formData.endDate)
                            .toISOString()
                            .substring(0, 10)
                        : ""
                    }
                    onChange={handleChange}
                    className="text-lg border border-[#444B88] rounded-md px-2 py-2"
                    required
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg text-[#444B88]">Description</h1>
                <textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={8}
                  className="border border-[#444B88] rounded-md px-2 w-full"
                ></textarea>
              </div>
              <div>
                <h1 className="text-lg text-[#444B88]">
                  Github Repository Link
                </h1>
                <input
                  type="text"
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                  className="w-full border border-[#444B88] py-2 px-2 rounded-md"
                />
              </div>
              <div>
                <h1 className="text-lg text-[#444B88]">Project Link</h1>
                <input
                  type="text"
                  name="projectLink"
                  value={formData.projectLink}
                  onChange={handleChange}
                  className="w-full border border-[#444B88] py-2 px-2 rounded-md"
                  required
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-4 gap-2">
            <button
              onClick={handleCancel}
              className="border border-[#444B88] px-2 py-1 rounded-md"
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
      </div>
    </div>
  );
}

export default Addprojects;
