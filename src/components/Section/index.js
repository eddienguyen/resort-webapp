import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Section = ({ children, title, label, classNames }) => {
    return <section className={classNames}>
        <div className="section-title">
            {label && <h4>{label}</h4>}
            {title && <h3>{title}</h3>}
        </div>
        <div className="section-content">
            {children}
        </div>
    </section>
}

Section.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string
}

export default Section;