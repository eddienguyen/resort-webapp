import React from 'react';
import './styles.scss';
import Section from 'components/Section';
import SizedBox from 'components/SizedBox';

const Services = () => {
    return (
        <Section label="services" classNames="services">
            <h2>
                Private Rooms,
            </h2>
            <SizedBox height={4} />
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <SizedBox height={3} />
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
            </div>
        </Section>
    );
}

const Explore = () => {
    return (
        <Section label="explore" title="Explore wonderful dream rooms" classNames="explore-rooms">
            <SizedBox height={4} />
            <div>

            </div>
        </Section>
    );
}

const Experiences = () => {
    return (
        <Section label="experiences" title="Make your stay unforgettable" classNames="experiences">
            <div>
                <p>
                    <span>Villatel makes easy to add unforgettable</span>
                    <span>moments to your vacation.</span>
                </p>
            </div>
        </Section>
    );
}

const Testimonials = () => {
    return (
        <Section label="testimonials" title="What our guests have to say" classNames="testimonials">

        </Section>
    );
}
export {
    Services,
    Explore,
    Experiences,
    Testimonials
}