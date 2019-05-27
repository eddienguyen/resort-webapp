import React, { Component } from 'react';
import { TimelineLite, Power2 } from 'gsap';

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

export {
    withRevealAnimation
}

