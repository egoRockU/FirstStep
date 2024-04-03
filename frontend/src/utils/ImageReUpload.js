import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { toast } from 'react-toastify';

export const uploadImage = async (file) => {
  try {
    if (!file) {
      throw new Error("No image file provided");
    }
    if (file.size > 1 * 1024 * 1024) {
      toast.error("Image size exceeds the limit (1MB)");
      throw new Error("Image size exceeds the limit (1MB)");
    }

    const timestamp = new Date().getTime();
    const filename = `${timestamp}_${file.name}`;
    const storageRef = ref(storage, `ResumePfp/${filename}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask;

    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    console.log("Download URL:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error handling image upload:", error);
    toast.error("Error occurred while handling image upload");
    throw new Error("Error occurred while handling image upload");
  }
};