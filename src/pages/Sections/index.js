import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { compose } from 'redux';
import './styles.scss';
import Section from 'components/Section';
import SizedBox from 'components/SizedBox';
import RoomCard from 'components/Room';
import { RoomContext } from 'context';
import Button from 'components/Button/Button';
import { withAnimationInViewPort, withRevealAnimation, Path } from 'components/Animation';
// import Hero from 'components/Hero/Hero';
import bannerSrc from 'assets/images/defaultBG.jpg';   // default hero banner
import withNavigation from 'components/Room/withNavigation';

const ServicesHeroAnimation = withRevealAnimation(Path, 'top left');
class Services extends Component {
    constructor(props) {
        super(props);
        this.pathRef = React.createRef();
    }

    render() {
        return (
            <Section label="services" classNames="services">
                {/* <div className="servicesBanner">
                    <svg
                        className="svgImg"
                        width={window.innerWidth}
                        height={window.innerHeight}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <image
                            className="usesImg"
                            height={window.innerHeight}
                            // width={window.innerWidth * 0.375}
                            href={bannerSrc}
                        />
                    </svg>
                    <svg
                        viewBox={`0 0 ${window.innerWidth * 0.375} ${window.innerHeight}`}
                        className="svgClip"
                    >
                        <defs>
                            <clipPath
                                id="clipPathServices"
                                clipPathUnits="objectBoundingBox"
                                transform={`scale( ${1 / window.innerWidth * 0.375} ${1 / window.innerHeight})`}
                            >
                                <ServicesHeroAnimation
                                    d="M0,.12s448-13.5,471,244c0,0-6.9,107.63,24,136.5,30.5,28.5,39.5,158.5-124,300,0,0-32,34.5-371,44.5Z"
                                    ref={this.pathRef}
                                />
                            </clipPath>
                        </defs>
                    </svg>

                </div> */}
                <div className="servicesContent">
                    <h2>
                        Private Rooms,
                    </h2>
                    <SizedBox height={4} />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <SizedBox height={3} />
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    </div>
                </div>

            </Section>
        );
    }

}

// const AnimatedRoomCard = withAnimationInViewPort(RoomCard);
class Explore extends Component {
    static contextType = RoomContext;

    constructor(props) {
        super(props);
        this.roomRef = React.createRef();
    }

    render() {
        let { featuredRooms: rooms, isLoading, minDescChar } = this.context;

        let featuredRooms = (
            <div className="featuredRooms">
                {rooms.map((room, key) => {
                    return (
                        <RoomCard
                            key={key}
                            roomData={room}
                            minChar={minDescChar}
                        />
                        // <NavigatedRoomCard
                        //     key={key}
                        //     ref={this.roomRef}
                        //     roomData={room}
                        //     minChar={minDescChar}
                        //     animationDelay={key * 0.1}
                        // />
                    );
                })}
            </div>);


        return (
            <Section
                label="explore"
                title="Explore wonderful dream rooms"
                classNames="explore"
            >
                <SizedBox height={4} />
                {isLoading ? 'loading...' : featuredRooms}
                <Link to="/rooms" className="cta">
                    <Button >
                        explore all rooms
                    </Button>
                </Link>
            </Section>
        );
    }
}

class Experiences extends Component {

    state = {
        experiences: [
            {
                label: 'music',
                title: "Rock Out at Concerts and Shows",
                imageSrc: "https://picsum.photos/720/520"
            },
            {
                label: 'Family',
                title: "Explore the Magic Kingdom",
                imageSrc: "https://picsum.photos/360"
            },
            {
                label: 'gasto',
                title: "Dine in with a Private Chef",
                imageSrc: "https://picsum.photos/360/260"
            },
        ]
    }

    render() {
        const { experiences } = this.state;

        return (
            <Section label="experiences" title="Make your stay unforgettable" classNames="experiences">
                <div>
                    <p>
                        <span>Villatel makes easy to add unforgettable</span>
                        <span>moments to your vacation.</span>
                    </p>
                </div>
                <div className="experiencesFlexBaseline">
                    {experiences.map((article, key) => {
                        return (
                            <article key={key} className="experience">
                                <img src={article.imageSrc} alt={article.label} />
                                <div className="experienceContent">
                                    <h6>{article.label}</h6>
                                    <h5>{article.title}</h5>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </Section>
        );
    }
}

const Testimonials = () => {
    return (
        <Section label="testimonials" title="What our guests have to say" classNames="testimonials">

        </Section>
    );
}

export {
    Services,
    Explore,
    Experiences,
    Testimonials,
}