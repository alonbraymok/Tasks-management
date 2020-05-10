import React, { useState } from "react";
import { uploadImageToCloudinary } from "../../util/cloudinary";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState(null);

  function handleImageUpload() {
    const { files } = document.querySelector('input[type="file"]');
    uploadImageToCloudinary(files[0])
      .then((res) => res.json())
      .then((res) => setImageUrl(res.secure_url))
      .catch((err) => console.log(err));
  }

  return (
    <main className="App">
      <section className="left-side">
        <form>
          <div className="form-group">
            <input type="file" />
          </div>

          <button type="button" className="btn" onClick={handleImageUpload}>
            Submit
          </button>
        </form>
      </section>
      <section className="right-side">
        {imageUrl && (
          <img src={imageUrl} alt={""} className="displayed-image" />
        )}
      </section>
    </main>
  );
}
