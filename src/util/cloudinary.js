export function uploadImageToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  // replace this with your upload preset name
  formData.append("upload_preset", "profile-image-alon-braymok");
  const options = {
    method: "POST",
    body: formData,
  };

  // replace cloudname with your Cloudinary cloud_name
  return fetch(
    "https://api.Cloudinary.com/v1_1/dex1pt4p4/image/upload",
    options
  );
}
