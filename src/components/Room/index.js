import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withNavigation from './withNavigation';
import './styles.scss';

class RoomCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldShowExtendedDesc: false,
            descriptionArr: [],
        }
    }

    componentDidMount() {
        const showChar = this.props.minChar;
        let descText = this.props.roomData.description;
        let descTextArr = [];

        if (descText.length > showChar) {
            descTextArr[0] = descText.substr(0, showChar);
            descTextArr[1] = descText.substr(showChar, descText.length);
        }
        this.setState({
            descriptionArr: descTextArr
        });
    }


    handleToggleExtendedDesc = () => {
        this.setState(prevState => {
            return {
                shouldShowExtendedDesc: !prevState.shouldShowExtendedDesc
            }
        });
    }

    render() {

        const {
            shouldShowExtendedDesc,
            descriptionArr
        } = this.state;

        const {
            roomData,
            minChar,
            staticContext,  //  remove warning from console ?
            animationDelay,  //  remove warning from console 2 ?
            onClick,        // as passed down from withNavigation, and onClick should be triggered when user clicks on image only
            ...rest
        } = this.props;
        const {
            slug,
            name,
            description,
            capacity,
            images,
        } = roomData;

        let thumbnailSrc = images[0] || "https://via.placeholder.com/200";

        let descriptionParagraph =
            descriptionArr.length > 0
                ? (
                    <p>
                        {
                            shouldShowExtendedDesc
                                ? descriptionArr[0] + descriptionArr[1]
                                : descriptionArr[0] + ' ... '
                        }
                        <button
                            className="btnToggleExtendDesc"
                            onClick={this.handleToggleExtendedDesc}
                        >{shouldShowExtendedDesc ? 'see less' : 'see more'}</button>
                    </p>
                )
                : (
                    <p>{description}</p>
                );

        return (
            <div className="roomCard" {...rest} >
                {/* <Link to={`/rooms/${slug}`} className="roomCardLink"> */}
                <img src={thumbnailSrc} alt={slug} className="roomCardLink" onClick={onClick} />
                {/* </Link> */}
                <div className='roomCardContent'>
                    <h5>{name}</h5>
                    {descriptionParagraph}
                    <div className="contentMeta">
                        <span className="bedroom">{`${capacity} bedrooms`}</span>
                        <button className="btnBook">Book now</button>
                    </div>
                </div>
            </div>
        );
    }
}

RoomCard.propTypes = {
    roomData: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        capacity: PropTypes.number,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    minChar: PropTypes.number,
    onClick: PropTypes.func,
}

RoomCard.defaultProps = {
    minChar: 200,
    onClick: () => null,
    // onVisible: () => { }
}

export default withNavigation(RoomCard);
// export default RoomCard;
