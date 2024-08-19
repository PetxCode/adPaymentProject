import cloudinary from "./cloudinary";

export const imageUpload = async (buffer: Uint8Array) => {
  try {
    return await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (err, res) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(res);
          }
        })
        .end(buffer);
    });
  } catch (error) {
    console.log(error);
  }
};
