import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from 'context';
import Section from 'components/Section';

function RoomContainer({ context }) {
    const { isLoading, rooms, sortedRooms } = context;
    if (isLoading) return <span>loading rooms for filter</span>;
    return (
        <Section title="Search rooms">
            <div className="container">
                <RoomFilter rooms={rooms} />
                <RoomList rooms={sortedRooms} />
            </div>
        </Section>
    );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { RoomContext, RoomConsumer } from 'context';

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {(value => {
//                 const { isLoading, rooms, sortedRooms } = value;
//                 if (isLoading) return <span>loading rooms for filter</span>;
//                 return (

//                     <div>
//                         room container
//                         <RoomFilter rooms={rooms} />
//                         <RoomList rooms={sortedRooms} />
//                     </div>
//                 );
//             })}
//         </RoomConsumer>
//     )
// }