import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

function RoomCard({ roomData }) {
    const {
        slug,
        name,
        description,
        capacity,
        images,
    } = roomData;

    let thumbnailSrc = images[0] || "https://via.placeholder.com/200";

    return (
        <div className="roomCard">
            <Link to={`/rooms/${slug}`} className="roomCardLink">
                <img src={thumbnailSrc} alt={slug} />
            </Link>
            <div className='roomCardContent'>
                <h5>{name}</h5>
                <p>{description}</p>
                <div className="contentMeta">
                    <span className="bedroom">{`${capacity} bedrooms`}</span>
                    <button>Book now</button>
                </div>
            </div>
        </div>
    );
}

RoomCard.propTypes = {
    roomData: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        capacity: PropTypes.number,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}

export {
    RoomCard
}