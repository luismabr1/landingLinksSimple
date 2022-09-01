import React from 'react';

const Loading = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="newtons-cradle dark:invert">
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
                    <div className="newtons-cradle__dot"></div>
            </div>
        </div>
    );
};

export default Loading;