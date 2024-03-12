import { deleteImageFromFirebase, projectImagesUpload } from './projectimageUpload'
export const editProject = async (
    initialData,
    formData,
    imagePreviews,
    onEdit,
    onClose,
    formIndex
  ) => {
    try {

      const deletedImageUrls = initialData.previewImages.filter(
        (imageUrl) => !formData.previewImages.includes(imageUrl)
      );
  
      
      for (const imageUrl of deletedImageUrls) {
        await deleteImageFromFirebase(imageUrl);
      }
  

      const newImagePreviews = imagePreviews.filter(
        (preview) => !initialData.previewImages.includes(preview)
      );
      const newImageUrls = await projectImagesUpload(newImagePreviews);
  
      
      const updatedImageUrls = [
        ...initialData.previewImages.filter(
          (imageUrl) => !deletedImageUrls.includes(imageUrl)
        ),
        ...newImageUrls,
      ];
  
      
      const updatedFormData = {
        ...formData,
        previewImages: updatedImageUrls,
      };
  
      
      onEdit(formIndex, updatedFormData);
  
      onClose();
    } catch (error) {
      console.error("Error editing project:", error);
      throw error; 
    }
  };
  