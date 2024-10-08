import React from "react";
import styles from "./ImageOverlay.module.css";

const ImageOverlay = ({ item }) => {
  return (
    <div className={`${styles.imageOverlayContainer} h-100`}>
      <div className={styles.imageContainer}>
        <img src={item.image} className={styles.backgroundImage} />
        <div className={styles.overlay}></div>
        <div
          className={`${styles.textContainer} w-100 h-100 d-flex justify-content-center align-items-center`}
        >
          <h4 className="mb-0">{item.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
