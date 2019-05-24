import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';

export default function Hero({ heroClassname, children, heroImg }) {
    return <header className={heroClassname}>
        {children}
        {/* visual */}
        <div className="heroVisual">
            <img src={heroImg || "https://picsum.photos/800"} alt="heroVisual" />
        </div>
    </header>
}

Hero.propTypes = {
    heroClassname: propTypes.oneOf(["defaultHero", "roomsHero"])
}

Hero.defaultProps = {
    heroClassname: 'defaultHero'
}