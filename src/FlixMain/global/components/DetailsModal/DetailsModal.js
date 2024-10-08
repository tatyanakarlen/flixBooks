import React, { useState, useEffect } from "react";
import { Modal, Image, Button } from "react-bootstrap";
import MovieYearLength from "../MovieYearLength/MovieYearLength";
import styles from "./DetailsModal.module.css";
import PlayBTN from "../PlayBTN/PlayBTN";
import Actions from "../Actions/Actions";
import Tag from "../Tag/Tag";
import HeartLikes from "../HeartLikes/HeartLikes";
import { RiCloseLargeFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const DetailsModal = ({
  showModal,
  setShowModal,
  selectedMovie,
  movies = [], // Default to an empty array
  continueWatching,
  setContinueWatching,
  fetchContinueWatching,
  userMovies,
  addToUserList,
  removeFromUserList,
}) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (Array.isArray(movies)) {
      const foundMovie = movies.find((movie) => movie.id === selectedMovie);
      setMovie(foundMovie);
    }
  }, [selectedMovie, movies]);

  return (
    <Modal
      centered
      size="lg"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      dialogClassName={styles.modal}
    >
      <div className="position-relative w-100">
        <Button onClick={() => setShowModal(false)} className={styles.closeBTN}>
          <RiCloseLargeFill className="fs-5" />
        </Button>
       
      <Image className="w-100" src={movie && movie.image} />
   
      </div>
      <div className={`${styles.modalContentContainer} d-flex justify-content-between`}>
        <div
          className={`${styles.leftSideContentDiv} text-light py-3 d-flex flex-column align-items-start`}
        >
          <h4 className="mt-1">{movie && movie.title}</h4>
          <MovieYearLength
            length={movie && movie?.length}
            year={movie && movie.year}
          />
          <div className="mt-3">
            <PlayBTN
              movieId={movie && movie.id}
              movie={movie && movie}
              continueWatching={continueWatching}
              setContinueWatching={setContinueWatching}
              setShowModal={setShowModal}
              fetchContinueWatching={fetchContinueWatching}
              text="Play"
              textColor="text-light"
              bgColor="redBTNbg"
              icon={true}
              padding="lgBTNPadding"
            />
          </div>
          <p className="mt-4">{movie && movie.description_long}</p>
          <Actions
            userMovies={userMovies}
            addToUserList={addToUserList}
            removeFromUserList={removeFromUserList}
            movieId={movie && movie.id}
          />
          <div className="d-flex mt-4 gap-2">
            {movie &&
              movie.tags.map((tag, index) => <Tag tag={tag} key={index} />)}
          </div>
        </div>
        <div
          className={`${styles.personellDetails} mt-2 d-flex flex-column gap-3 p-3 justify-content-between`}
        >
          <div className="d-flex flex-column gap-3">
            <p className={`mb-0`}>
              Cast:&nbsp;
              {movie &&
                movie.cast_members.map((castMember, index) => (
                  <span key={index}>
                    {castMember}
                    {index < movie.cast_members.length - 1 && ", "}
                  </span>
                ))}
            </p>
            <p className="mb-0">Creator: {movie && movie.creator}</p>
            <p className={`mb-0`}>
              Genres:&nbsp;
              {movie &&
                movie.genres.map((genre, index) => (
                  <span key={index}>
                    {genre}
                    {index < movie.genres.length - 1 && ", "}
                  </span>
                ))}
            </p>
          </div>
          <div className={`${styles.heartLikeContainer}`}>
            <HeartLikes likes={movie && movie.likes} altBG={true} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;
