import React from 'react';
import { Link } from 'react-router-dom';
import Hero from 'components/Hero/Hero';
import Banner from 'components/Banner/Banner';
import Button from 'components/Button/Button';
import SizedBox from 'components/SizedBox';

export default function Error() {
    return <div>
        <Hero heroClassname="defaultHero" shouldShowVisual >
            <Banner
                title="404"
                subtitle="Page not found"
            >
                <SizedBox height={2} />
                <Link to="/">
                    <Button>
                        to homepage     
                </Button>
                </Link>
            </Banner>
        </Hero>
    </div>;
}