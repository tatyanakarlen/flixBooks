import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./HeartLikes.module.css";

const HeartLikes = ({ likes, altBG }) => {
  return (
    <div className="d-flex justify-content-end">
    <small
      className={`${styles.likeSpan} ${altBG && styles.altBG} rounded-pill py-1 px-3 d-flex align-items-center gap-2 text-light`}
    >
      <FaHeart />
      {likes}
    </small>
    </div>
  );
};

export default HeartLikes;
