import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default cloudinary

// Helper function to upload image to Cloudinary
export async function uploadImageToCloudinary(
  imageBuffer: Buffer,
  folder: string = 'regrowth-demos',
  publicId?: string
): Promise<string> {
  try {
    const result = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${imageBuffer.toString('base64')}`,
      {
        folder,
        public_id: publicId,
        resource_type: 'image',
        format: 'jpg',
        quality: 'auto',
        fetch_format: 'auto'
      }
    )
    return result.secure_url
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error)
    throw new Error('Failed to upload image')
  }
}

// Helper function to delete image from Cloudinary
export async function deleteImageFromCloudinary(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId)
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error)
    throw new Error('Failed to delete image')
  }
}
