import React, { useContext } from 'react';
import { RoomContext } from 'context';
export default (WrappedComponent) => {
    const context = useContext(RoomContext);
    const {
        history: passedHistory
    } = context;

    const goBack = () => {
        passedHistory.goBack();
    }

    return <WrappedComponent goBack={goBack} />
}