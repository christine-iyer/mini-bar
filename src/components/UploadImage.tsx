import React, { useState } from "react";

const CLOUDINARY_URL = "https://res.cloudinary.com/dqjhgnivi/image/upload/";
const UPLOAD_PRESET = "qw8moaui";

interface UploadImageProps {
  onUpload: (urls: string[]) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const uploadedUrls: string[] = [];
    setUploading(true);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const response = await fetch(CLOUDINARY_URL, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.secure_url) {
          uploadedUrls.push(data.secure_url);
        }
      }

      setImages((prev) => [...prev, ...uploadedUrls]);
      onUpload(uploadedUrls);
      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
      />
      {uploading && <p>Uploading...</p>}
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Uploaded ${index}`}
            style={{ width: "100px", height: "100px", margin: "5px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default UploadImage;