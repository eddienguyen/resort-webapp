import React from 'react';
import Hero from 'components/Hero/Hero';
import Banner from 'components/Banner/Banner';
import RoomContainer from 'components/RoomContainer';

export default function Rooms() {
    return (<div>
        <Hero shouldShowVisual>
            <Banner
                title="Explore wonderful dream rooms"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            >
            </Banner>
        </Hero>
        <RoomContainer />
    </div>)
}