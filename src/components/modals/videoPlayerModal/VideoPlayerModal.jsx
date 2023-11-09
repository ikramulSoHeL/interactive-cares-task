import React from "react";
import "./videoPlayerModal.scss";

const VideoPlayerModal = ({ onClose }) => {
  return (
    <>
      <div className="videoPlayer__modal" onClick={onClose}></div>

      <i className="fas fa-times videoPlayer__close" onClick={onClose}></i>

      <div className="videoPlayer__modalContainer">
        <div className="videoPlayer__modalContent">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/FlRwssZYRM0"
            title="10 Best Places to Visit in Italy - Travel Video"
            frameborder="0"
            allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            autoplay
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VideoPlayerModal;
