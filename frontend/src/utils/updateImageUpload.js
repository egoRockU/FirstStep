import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const updateProfileImage = async (file, previousImage, setSelectedImage) => {
  try {
    if (previousImage) {
      const prevImageRef = ref(storage, previousImage);
      await deleteObject(prevImageRef);
      console.log("Previous image deleted successfully");
    }

    if (file.size > 1 * 1024 * 1024) {
      toast.error("Image size exceeds the limit (1MB)");
      throw new Error("Image size exceeds the limit (1MB)");
    }

    const newImageRef = ref(storage, `Profile/${file.name}`);

    const uploadTask = uploadBytesResumable(newImageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Error uploading image:", error);
        toast.error("Error occurred while uploading image.");
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("Download URL:", downloadURL);

          setSelectedImage(downloadURL);
          toast.success("Profile image updated successfully");
        } catch (error) {
          console.error("Error getting download URL:", error);
          toast.error("Error occurred while getting download URL.");
        }
      }
    );
  } catch (error) {
    console.error("Error updating profile image:", error);
    toast.error("Error occurred while updating profile image.");
  }
};

export const updateBannerImage = async (file, oldImageUrl, setBannerImage) => {
  try {
    if (oldImageUrl) {
      const oldImageRef = ref(storage, oldImageUrl);
      await deleteObject(oldImageRef);
      console.log("Previous banner image deleted successfully");
    }

    if (file.size > 1 * 1024 * 1024) {
      toast.error("Banner image size exceeds the limit (1MB)");
      throw new Error("Banner image size exceeds the limit (1MB)");
    }

    const newImageRef = ref(storage, `Banner/${file.name}`);

    const uploadTask = uploadBytesResumable(newImageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Error uploading banner image:", error);
        toast.error("Error occurred while uploading banner image.");
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("New Banner Image Download URL:", downloadURL);

          setBannerImage(downloadURL);
          toast.success("Banner image updated successfully");
        } catch (error) {
          console.error("Error getting download URL:", error);
          toast.error("Error occurred while getting download URL.");
        }
      }
    );
  } catch (error) {
    console.error("Error updating banner image:", error.message);
    toast.error("Error occurred while updating banner image.");
  }
};
