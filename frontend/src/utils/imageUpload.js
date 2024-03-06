
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
export const uploadImage = async (file, setSelectedImage, setInputs) => {
  try {
    if (!file) {
      return;
    }
    if (file.size > 1 * 1024 * 1024) {
      alert("Please select an image that is 1MB or less in size.");
      return;
    }

    const timestamp = new Date().getTime();
    const filename = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `Profile/${filename}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

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
            setSelectedImage(downloadURL);
            console.log("Download URL:", downloadURL);

            setInputs((prevInputs) => ({
              ...prevInputs,
              profileImg: downloadURL,
            }));
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
            alert("Error occurred while getting download URL.");
          });
      }
    );
  } catch (error) {
    console.error("Error handling image upload:", error);
    alert("Error occurred while handling image upload.");
  }
};


//banner
export const uploadBanner = async (file, setSelectedBanner, setInputs) => {
  try {
    if (!file) {
      return;
    }
    if (file.size > 1 * 1024 * 1024) {
      alert("Please select a banner image that is 1MB or less in size.");
      return;
    }

    const timestamp = new Date().getTime();
    const filename = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `Banner/${filename}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Error uploading banner image:", error);
        alert("Error occurred while uploading banner image.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setSelectedBanner(downloadURL);
            console.log("Banner Download URL:", downloadURL);

            setInputs((prevInputs) => ({
              ...prevInputs,
              banner: downloadURL,
            }));
          })
          .catch((error) => {
            console.error("Error getting banner download URL:", error);
            alert("Error occurred while getting banner download URL.");
          });
      }
    );
  } catch (error) {
    console.error("Error handling banner upload:", error);
    alert("Error occurred while handling banner upload.");
  }
};