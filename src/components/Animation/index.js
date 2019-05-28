import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { TimelineLite, Power2, TweenLite } from 'gsap';

const withRevealAnimation = (WrappedComponent, transformOrigin) => {
    class Animation extends Component {
        constructor(props) {
            super(props);
            this.elementRef = null;
            this.tl = new TimelineLite();
        }

        componentDidMount() {
            this.elementRef = this.props.forwardedRef.current;

            this.tl.from(this.elementRef, 1, {
                scale: 0.5,
                autoAlpha: 0,
                transformOrigin: transformOrigin || 'center',
                ease: Power2.easeOut
            });
            if (this.elementRef != null) {
                this.tl.play();
            }
        }

        componentWillUnmount() {
            this.tl.reverse();
        }

        render() {
            const { ref, ...rest } = this.props;
            return (
                <WrappedComponent forwardedRef={ref} {...rest} />
            );
        }
    }

    const forwardRef = (props, ref) => {
        return <Animation forwardedRef={ref} {...props} />
    }

    return React.forwardRef(forwardRef);

}

const withAnimationInViewPort = TargetComponent => {
    class Animation extends Component {

        constructor(props) {
            super(props);
            this.elementRef = null;
            this.animated = false;
            this.tl = new TimelineLite({ paused: true });
        }

        componentDidMount() {

            // get observer
            if (!this.props.forwardedRef.current) return; // is a DOM node

            this.elementRef = findDOMNode(this.props.forwardedRef.current);

            TweenLite.set(this.elementRef, {
                scale: 0.9,
                autoAlpha: 0
            });

            this.observer = new IntersectionObserver(this.intersectionCallback, {
                // root: Defaults to the browser viewport if not specified or if null.
                // threshold:[1] The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
            });
            this.observer.observe(this.elementRef);



            // if (this.elementRef !== null) {
            //     TweenLite.to(this.elementRef, 10, {
            //         x: 100
            //     });
            // }

        }

        intersectionCallback = (entries, observer) => {
            entries.forEach((entry) => {
                const { isIntersecting, intersectionRatio, target } = entry;
                const isInviewPort = typeof isIntersecting !== 'undefined' ? isIntersecting : intersectionRatio !== 0;
                this.tl.to(target, 0.5, {
                    scale: 1,
                    autoAlpha: 1,
                    ease: Power2.easeIn,
                }).delay(this.props.animationDelay || 0);
                ;
                if (this.elementRef != null && isInviewPort) {
                    if (!this.animated) {
                        this.animated = true;
                        this.tl.play();
                    }
                }
            });
        }


        render() {
            const { forwardedRef, ...rest } = this.props;

            return (
                <TargetComponent ref={forwardedRef} {...rest} />
            );
        }
    }

    Animation.propTypes = {
        animationDelay: PropTypes.number,
        // onVisible: PropTypes.func,
    }

    return React.forwardRef((props, ref) => {
        return <Animation {...props} forwardedRef={ref} />
    });
}

export {
    withRevealAnimation,
    withAnimationInViewPort,
}

// // HOC for handleViewport
// import React, { useRef, forwardRef } from 'react';
// import hoistNonReactStatic from 'hoist-non-react-statics';
// import useInViewport from './useInViewport';

// const noop = () => {};

// function handleViewport(TargetComponent, options, config = { disconnectOnLeave: false }) {
//   const ForwardedRefComponent = forwardRef((props, ref) => {
//     return <TargetComponent {...props} forwardedRef={ref} />;
//   });

//   const InViewport = ({ onEnterViewport = noop, onLeaveViewport = noop, ...restProps }) => {
//     const node = useRef();
//     const { inViewport, enterCount, leaveCount } = useInViewport(
//       node,
//       options,
//       config,
//       {
//         onEnterViewport,
//         onLeaveViewport
//       }
//     );

//     return (
//       <ForwardedRefComponent
//         {...restProps}
//         inViewport={inViewport}
//         enterCount={enterCount}
//         leaveCount={leaveCount}
//         ref={node}
//       />
//     );
//   };

//   return hoistNonReactStatic(InViewport, ForwardedRefComponent);
// }

// export default handleViewport;