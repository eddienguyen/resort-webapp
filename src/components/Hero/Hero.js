import React, { Component } from 'react';
import propTypes from 'prop-types';
import './styles.scss';
import bannerSrc from 'assets/images/detail-22.jpg';
//https://stackoverflow.com/questions/46463344/clip-path-is-not-working-for-firefox-ie-or-edge
export default class Hero extends Component {
    constructor(props) {
        super(props);
        // ({ heroClassname, children, heroImg })
        this.svgImgRef = React.createRef();
        this.state = {
            maxVisualWidth: 0,
            maxVisualHeight: 0
        }
    }

    componentDidMount() {
        const node = this.svgImgRef.current;
        this.setState({
            maxVisualWidth: node.clientWidth,
            maxVisualHeight: node.clientHeight
        });
        console.log(node.clientWidth);
        console.log(node.clientHeight);
    }

    render() {
        const { heroClassname, children, heroImg } = this.props;
        return (
            <header className={heroClassname}
                ref={this.svgImgRef}
            >
                {children}
                {/* visual */}
                <div className="heroVisual">
                    <div className="imageWrapper">
                        <svg
                            viewBox={`0 0 ${this.state.maxVisualWidth / 2} ${this.state.maxVisualHeight}`}
                            width={this.state.maxVisualWidth / 2}
                            height={this.state.maxVisualHeight}
                            className="svgImg"
                            preserveAspectRatio="xMinYMid meet"
                            x="100"
                            y="0"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* <image href={heroImg || "https://picsum.photos/800"} /> */}
                            <image
                                className="usesImg"
                                width={this.state.maxVisualWidth}
                                height={this.state.maxVisualHeight}
                                href={bannerSrc} />
                        </svg>
                        {/* <img src={heroImg || "https://picsum.photos/800"} alt="heroVisual" /> */}
                    </div>
                    <svg className="svgClip">
                        <defs>
                            <clipPath id="clipPath">
                                <path className="clipPathHero" d="M760.38.38H.38s0,89,146,189c0,0,96,64,99,174,2.64,97.14,162,405,515,405Z" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </header >
        )
    }

}

Hero.propTypes = {
    heroClassname: propTypes.oneOf(["defaultHero", "roomsHero"])
}

Hero.defaultProps = {
    heroClassname: 'defaultHero'
}