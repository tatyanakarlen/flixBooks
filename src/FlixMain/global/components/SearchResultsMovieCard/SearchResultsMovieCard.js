import React from "react";
import styles from "./SearchResultsMovieCard.module.css";
import { Col, Image } from "react-bootstrap";
import PlayBTN from "../PlayBTN/PlayBTN";
import { IoPlaySharp } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import MovieYearLength from "../MovieYearLength/MovieYearLength";
import Actions from "../Actions/Actions";
import Tag from "../Tag/Tag";

const SearchResultsMovieCard = ({ movie, setMovie, setShowModal }) => {
  return (
    <Col className="mb-4 text-light" xs={12} xxl={6}>
      <div className={`${styles.cardContainer} d-flex gap-4 p-3`}>
        <div className={styles.imgContainer}>
          <Image fluid className="w-100" src={movie.image} />
          <div
            onClick={() => setMovie(movie.id)}
            className={styles.detailsIconDiv}
          >
            <MdOutlinePlaylistPlay />
          </div>
        </div>
        <div className="d-flex flex-column w-100">
          <div className="d-flex align-items-center justify-content-between">
            <h5>{movie.title}</h5>

            <PlayBTN
              text="Play"
              textColor="text-light"
              bgColor="redBTNbg"
              icon={<IoPlaySharp />}
              movieId={movie && movie.id}
              movie={movie && movie}
              setShowModal={setShowModal}
              padding="lgBTNPadding"
            />
          </div>
          <MovieYearLength length={movie.length} year={movie.year} />
          <small className="pe-4 mt-3">{movie.description}</small>
          <div className="mt-4">
            <Actions />
          </div>
          <div className="d-flex mt-4 gap-2">
            {movie.tags.map((tag, index) => (
              <Tag tag={tag} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SearchResultsMovieCard;
