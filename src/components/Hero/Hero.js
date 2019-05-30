import React, { Component } from 'react';
import propTypes from 'prop-types';
import './styles.scss';
import bannerSrc from 'assets/images/defaultBG.jpg';   // default hero banner
import { withRevealAnimation, Path } from 'components/Animation';

const SvgWithRevealAnimation = withRevealAnimation(Path, 'top right');
export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.svgImgRef = React.createRef();
        this.pathRef = React.createRef();
        this.state = {
            maxVisualWidth: 0,
            maxVisualHeight: 0,
            isLoadingVisual: true,
            isLoadingBannerImg: true
        }
    }

    handleImageLoaded() {
        this.setState({
            isLoadingBannerImg: false
        });
    }

    componentDidMount() {
        this.setVisualSize();
    }

    setVisualSize() {
        const node = this.svgImgRef.current;

        if (node !== null && node.clientWidth !== 0 && node.clientHeight !== 0) {
            this.setState({
                maxVisualWidth: node.clientWidth,
                maxVisualHeight: node.clientHeight,
                isLoadingVisual: false
            });
        }
    }

    render() {
        const {
            maxVisualWidth,
            maxVisualHeight,
            isLoadingVisual,
            isLoadingBannerImg } = this.state;

        const { heroClassname, children, heroImg, shouldShowVisual } = this.props;

        const heroVisual = shouldShowVisual
            ? (
                <div className="heroVisual"
                    ref={this.svgImgRef}
                >

                    <svg
                        width={maxVisualWidth}
                        height={maxVisualHeight}
                        className="svgImg"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {
                            !isLoadingVisual && <image
                                className="usesImg"
                                height={maxVisualHeight}
                                href={heroImg || bannerSrc}
                                onLoad={this.handleImageLoaded.bind(this)}
                            />
                        }

                    </svg>

                    <svg
                        viewBox={`0 0 ${maxVisualWidth} ${maxVisualHeight}`}
                        // <!--viewBox = "X1 Y1 X2 Y2"-->
                        preserveAspectRatio="xMinYMid meet"
                        className="svgClip">
                        <defs>
                            {!isLoadingVisual &&
                                <clipPath
                                    id="clipPath"
                                    clipPathUnits="objectBoundingBox"
                                    transform={`scale(${1 / maxVisualWidth} ${1 / maxVisualHeight})`}
                                >
                                    {/* path */}
                                    {!isLoadingBannerImg && <SvgWithRevealAnimation
                                        className="clipPathHero"
                                        d="M760.38.38H.38s0,89,146,189c0,0,96,64,99,174,2.64,97.14,162,405,515,405Z"
                                        ref={this.pathRef}
                                    />}
                                </clipPath>}

                        </defs>
                    </svg>
                </div>
            )
            : (
                <div className="heroVisual"
                    ref={this.svgImgRef}
                >
                    {!isLoadingVisual &&
                        <img
                            height={maxVisualHeight}
                            src={heroImg || bannerSrc}
                            onLoad={this.handleImageLoaded.bind(this)}
                            alt="heroImg"
                        />
                    }
                </div >
            );

        return (
            <header className={heroClassname}>
                {children}
                {/* visual */}
                {/* <div className="heroVisual"
                    ref={this.svgImgRef}
                ></div> */}
                {heroVisual}
            </header >
        )
    }

}

Hero.propTypes = {
    heroClassname: propTypes.oneOf(["defaultHero", "roomHero"]),
    shouldShowVisual: propTypes.bool
}

Hero.defaultProps = {
    heroClassname: 'defaultHero',
    shouldShowVisual: true
}