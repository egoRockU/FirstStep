import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";

export const uploadImage = async (file) => {
  try {
    if (!file) {
      throw new Error("No image file provided");
    }
    if (file.size > 1 * 1024 * 1024) {
      throw new Error("Image size exceeds the limit (1MB)");
    }

    const timestamp = new Date().getTime();
    const filename = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `Profile/${filename}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask;

    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    console.log("Download URL:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error handling image upload:", error);
    throw new Error("Error occurred while handling image upload");
  }
};

export const uploadBanner = async (file) => {
  try {
    if (!file) {
      throw new Error("No banner image file provided");
    }
    if (file.size > 1 * 1024 * 1024) {
      throw new Error("Banner image size exceeds the limit (1MB)");
    }

    const timestamp = new Date().getTime();
    const filename = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `Banner/${filename}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask;

    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    console.log("Banner Download URL:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error handling banner upload:", error);
    throw new Error("Error occurred while handling banner upload");
  }
};