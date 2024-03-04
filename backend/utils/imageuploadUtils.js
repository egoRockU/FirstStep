// imageuploadUtils.js
import { uploadImage, createAccountWithImage } from '../controllers/imageuploadController.js';

export const handleImageUpload = async (req, res) => {
    if (!req.file) {
        return res.status(400).send({
            status: "ERROR",
            message: "No file uploaded",
        });
    }

    const file = {
        type: req.file.mimetype,
        buffer: req.file.buffer
    };

    try {
        console.log('Uploading image');
        const buildImage = await uploadImage(file);
        console.log('Image uploaded successfully:', buildImage);
            return res.status(200).json({
             status: "Success",
            imageName: buildImage,
    });

    } catch (err) {
        console.error('Error uploading image:', err);
        throw {
            status: "ERROR",
            message: "Failed to upload image",
        };
    }
};
export const createAccount = async (req, res) => {
    try {
        // Reuse the logic from handleImageUpload
        
        // Check for missing required fields
        if (!req.body.firstName || !req.body.lastName) {
            return res.status(400).send({
                status: "ERROR",
                message: "Missing required fields",
            });
        }

        // Create account with image
        const createdAccount = await createAccountWithImage(req.body.firstName, req.body.lastName, req.file);

        // Send success response
        res.status(201).json({
            status: "Success",
            message: "Account created successfully",
            account: createdAccount,
        });
    } catch (err) {
        console.error('Error creating account:', err);
        res.status(500).send({ status: "ERROR", message: "Internal server error" });
    }
};
