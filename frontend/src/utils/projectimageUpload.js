
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL, uploadString, deleteObject } from "firebase/storage";

export const projectImagesUpload = async (imagePreviews) => {
  const imageUrls = [];

  const folderName = `project_images/${Date.now()}`;

  const storageRef = ref(storage, folderName);

  for (let i = 0; i < imagePreviews.length; i++) {
    const image = imagePreviews[i];
    const imageRef = ref(storageRef, `${i}`);

    await uploadString(imageRef, image, 'data_url');

    const imageUrl = await getDownloadURL(imageRef);
    imageUrls.push(imageUrl);
  }

  return imageUrls;
};


export const deleteImageFromFirebase = async (imageUrl) => {
  try {
    
    const imagePath = imageUrl.split("?")[0];


    const imageRef = ref(storage, imagePath);

  
    await deleteObject(imageRef);

    console.log("Image deleted from Firebase Storage:", imageUrl);
  } catch (error) {
    console.error("Error deleting image from Firebase Storage:", error);
    throw error;
  }
};


