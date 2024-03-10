import { ref, uploadBytesResumable, getDownloadURL,deleteObject,} from "firebase/storage";
import { storage } from "../firebase/firebase";

export const updateProfileImage = async (file,previousImage, setSelectedImage) => {
  
    try {
    if (previousImage) {
      const prevImageRef = ref(storage, previousImage);
      await deleteObject(prevImageRef);
      console.log("Previous image deleted successfully");
    }

    const newImageRef = ref(storage, `Profile/${file.name}`);

    const uploadTask = uploadBytesResumable(newImageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Error uploading image:", error);
        alert("Error occurred while uploading image.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("Download URL:", downloadURL);

            setSelectedImage(downloadURL);
            console.log("Profile image updated successfully");
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
            alert("Error occurred while getting download URL.");
          });
      }
    );
  } catch (error) {
    console.error("Error updating profile image:", error);
    alert("Error occurred while updating profile image.");
  }
};
export const updateBannerImage = async (file, oldImageUrl, setBannerImage) => {
  try {
    if (oldImageUrl) {
      const oldImageRef = ref(storage, oldImageUrl);
      await deleteObject(oldImageRef);
      console.log("Previous banner image deleted successfully");
    }

    const newImageRef = ref(storage, `Banner/${file.name}`);

    const uploadTask = uploadBytesResumable(newImageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Error uploading banner image:", error);
        alert("Error occurred while uploading banner image.");
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("New Banner Image Download URL:", downloadURL);

          setBannerImage(downloadURL);
          console.log("Banner image updated successfully");
        } catch (error) {
          console.error("Error getting download URL:", error);
          alert("Error occurred while getting download URL.");
        }
      }
    );
  } catch (error) {
    console.error("Error updating banner image:", error.message);
    alert("Error occurred while updating banner image.");
  }
};