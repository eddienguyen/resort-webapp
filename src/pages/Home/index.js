import React from 'react';
import Hero from 'components/Hero/Hero';
import Banner from 'components/Banner/Banner';
import { Services, Explore, Experiences, Testimonials } from 'pages/Sections';
export default function Home() {
    return (
        <>
            <Hero heroClassname="defaultHero" >
                <Banner
                    title="Enjoy your vacation in luxury dream houses"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                >
            </Banner>

            </Hero>
            <Explore />
            <Services />
            <Experiences />
            <Testimonials />
        </>);
}