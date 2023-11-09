import React, { useState } from "react";
import "./destinationGalleryInfo.scss";

import { TbPlayerSkipForward } from "react-icons/tb";

import Wrapper from "../../../components/wrapper/Wrapper";
import VideoPlayerModal from "../../../components/modals/videoPlayerModal/VideoPlayerModal";

const DestinationGalleryInfo = () => {
  const [openVideoPlayerModal, setOpenVideoPlayerModal] = useState(false);

  return (
    <Wrapper>
      <div className="destinationGalleryInfo">
        <div className="gallery__images">
          <div className="subImages">
            <img
              src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
            <img
              src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </div>

          <div className="main__image">
            <img
              src="https://images.pexels.com/photos/17095025/pexels-photo-17095025/free-photo-of-panorama-of-a-beautiful-mountain-town-with-a-river-bridge-and-clock-tower-amasya-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <div className="image__layer">
              <TbPlayerSkipForward
                onClick={() => setOpenVideoPlayerModal(true)}
              />
            </div>
          </div>

          <div className="subImages">
            <img
              src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
            <img
              src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {openVideoPlayerModal && (
        <VideoPlayerModal onClose={() => setOpenVideoPlayerModal(false)} />
      )}
    </Wrapper>
  );
};

export default DestinationGalleryInfo;
