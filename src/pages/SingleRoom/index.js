import React, { Component } from 'react';
import Hero from 'components/Hero/Hero';
import Banner from 'components/Banner/Banner';
import SizedBox from 'components/SizedBox';
import { RoomContext } from 'context';
import './styles.scss';
class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            name: "",
            description: ""
        }
    }

    static contextType = RoomContext;

    componentDidMount() {


    }

    render() {
        const { getRoom } = this.context;
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
                    heroClassname="defaultHero"
                    heroImg={mainImg}
                >
                    <Banner
                        title={name}
                        subtitle={description}
                    >
                        <SizedBox height={2} />
                    </Banner>
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