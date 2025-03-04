import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./utils/cropImage"; // Import helper function
import "../../css/model.css";

const Model = ({ openModal, setOpenModal, setProfileImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // Handle Image Selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setOpenModal(true);
      };
      reader.readAsDataURL(file);
    }
  };

  // Store the crop area in pixels
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Save Cropped Image
  const handleSave = async () => {
    if (image && croppedAreaPixels) {
      const croppedImageUrl = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImageUrl);
      setProfileImage(croppedImageUrl); // Update profile image
      setOpenModal(false); // Close modal
    }
  };

  return (
    <>
      {openModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            {/* Left Side - Cropper */}
            <div className="crop-container">
              {image && (
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
              />
            </div>

            {/* Right Side - Preview */}
            <div className="preview-container">
              <h3>Preview</h3>
              <div className="preview-avatar">
                <img src={croppedImage || image} alt="Preview" />
              </div>
              <div className="modal-buttons">
                <button
                  onClick={() => setOpenModal(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
                <button onClick={handleSave} className="save-btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
