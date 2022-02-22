import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
// Styles
import { Image } from "./Thumb.styles";
import { bool } from "prop-types";

const Thumb = ({ image, movieId, clickable }) => {
    return (
        <div>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt='movie_thumb' />
                </Link>
            ) : (
                <Image src={image} alt='movie_thumb' />
            )}

        </div>
    );
}

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: bool
}

export default Thumb;