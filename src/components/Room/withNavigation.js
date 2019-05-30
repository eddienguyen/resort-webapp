import React, { useContext } from 'react';
import { RoomContext } from 'context';

export default (WrappedComponent) => ({ roomData, ...rest }) => {
    let elementRef = null;

    const context = useContext(RoomContext);
    const {
        history: passedHistory
    } = context;

    const goToDetailModal = () => {
        const {
            top,
            right,
            bottom,
            left,
            width,
            height
        } = elementRef.getBoundingClientRect();

        try {
            passedHistory.push({
                pathname: `/rooms/${roomData.slug}`,
                state: {
                    to: "modal",
                    meta: {
                        from: {
                            top,
                            right,
                            bottom,
                            left,
                            width,
                            height
                        }
                    }
                }
            });
        } catch (error) {
            console.group('Error in pushing from passedHistory:');
            console.log('error: ', error);
            console.groupEnd();
        }

    };

    return (
        <div ref={(el) => { elementRef = el }}>
            <WrappedComponent
                onClick={goToDetailModal}
                roomData={roomData}
                {...rest}
            />
        </div>
    );
}