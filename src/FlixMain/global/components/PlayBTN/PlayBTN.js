import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IoPlaySharp } from "react-icons/io5";
import styles from "./PlayBTN.module.css";

const CustomBTN = ({
  link,
  click,
  text,
  icon, 
  bgColor, 
  textColor, 
 
  
  variant,
  setShowModal,
  movieId,
  movie,
}) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(`/flixStream/play/${movie && movieId}`);
        setShowModal(false);
      }}
      variant={variant}
      className={`${styles.btn} ${bgColor} ${textColor} d-flex align-items-center justify-content-center gap-2 rounded`}
    >
      { icon && 
      <IoPlaySharp />
}

      {text}
    </Button>
  );
};

export default CustomBTN;
