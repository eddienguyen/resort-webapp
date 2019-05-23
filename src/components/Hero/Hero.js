import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';


export default function Hero({ heroClassname, children }) {
    return <header className={heroClassname}>
        {children}
        {/* visual */}
        <div className="heroVisual">
            <img src="https://picsum.photos/800" alt="heroVisual" />
        </div>
    </header>
}

Hero.propTypes = {
    heroClassname: propTypes.oneOf(["defaultHero", "roomsHero"])
}

Hero.defaultProps = {
    heroClassname: 'defaultHero'
}