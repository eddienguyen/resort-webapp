import React from 'react';

export default (Component) => ({ history, roomData, ...rest }) => {
    let elementRef = null;

    const goToDetailModal = () => {
        console.log('pushing');
        const {
            top,
            right,
            bottom,
            left,
            width,
            height
        } = elementRef.getBoundingClientRect();

        history.push({
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
        })
    };

    return (
        <div ref={el => elementRef = el}>
            <Component
                onClick={goToDetailModal}
                roomData={roomData}
                {...rest}
            />
        </div>
    );

}