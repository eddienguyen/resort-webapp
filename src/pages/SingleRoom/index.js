import React, { Component } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import Hero from 'components/Hero/Hero';
import Banner from 'components/Banner/Banner';
import SizedBox from 'components/SizedBox';
import { RoomContext } from 'context';
import { capitalize } from 'config/utils';
import './styles.scss';
class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            name: "",
            description: ""
        }
        this.history = null;
    }

    static contextType = RoomContext;

    componentDidMount() {
        this.history = this.context.history || null;
    }

    goBack = () => {
        this.history !== null && this.history.goBack();
    }

    render() {
        const { getRoom, history } = this.context;
        let roomData = getRoom(this.state.slug);
        if (roomData == null) {
            return <div>no data</div>
        }
        // const {
        //     slug,
        // } = this.state;
        const {
            images,
            name,
            description,
            price,
            size,
            capacity,
            pets,
            breakfast,
            extras
        } = roomData;
        const [mainImg, ...imagesGallery] = images;

        return (
            <>
                <Hero
                    heroClassname="roomHero"
                    heroImg={mainImg}
                    shouldShowVisual={this.props.shouldShowVisual !== 'undefined' ? this.props.shouldShowVisual : true}
                >
                    <Banner
                        title={capitalize(name)}
                        subtitle={description}
                    >
                        <SizedBox height={2} />
                    </Banner>
                    <span className="action actionClose" onClick={this.goBack}>
                        <IoIosCloseCircle
                            fill="#ffffff"
                            size="32"
                        />
                    </span>
                </Hero>
                <section className="singleRoom">
                    <div className="container">
                        <div className="roomGallery" >
                            {imagesGallery.map((imgSrc, key) => (
                                <div key={key} className="imgContainer">
                                    <img src={imgSrc} alt={name} />
                                </div>
                            ))}
                        </div>
                        <div className="roomInfo">
                            <article className="desc">
                                <h3>details</h3>
                                <p>{description}</p>
                            </article>
                            <article className="info">
                                <h3>info</h3>
                                <h6>${price}</h6>
                                <h6>{size} SQFT</h6>
                                <h6>
                                    {capacity > 1
                                        ? `${capacity} people`
                                        : `${capacity} person`
                                    }
                                </h6>
                                <h6>
                                    {pets
                                        ? "pets allowed"
                                        : "no pets allowed"
                                    }
                                </h6>
                                <h6>
                                    {breakfast && "breakfast included"}
                                </h6>
                            </article>
                        </div>
                        <div className="roomExtras">
                            <h3>Extras</h3>
                            <ul className="extras">
                                {extras.map((item, key) => (<li key={key}>
                                    -{item}
                                </li>))}
                            </ul>
                        </div>
                    </div>

                </section>
            </ >
        );
    }
}

export default SingleRoom;