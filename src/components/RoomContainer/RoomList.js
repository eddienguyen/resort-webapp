import React from 'react';
import RoomCard from 'components/Room';
import './RoomList.scss';

export default function RoomList({ rooms, minDescChar }) {

    const emptyRoomList = (
        <div className="emptySearch">
            <h3>unfortunately no rooms matched your search.</h3>
        </div>
    );
    const roomList = (

        <div className="roomlistCenter">
            {rooms.map(room => {
                return (
                    <RoomCard key={room.id} roomData={room} minChar={minDescChar} />
                );
            })}
        </div>
    );

    return rooms.length === 0
        ? emptyRoomList
        : roomList;
}