import { storage } from "../firebase/firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

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
