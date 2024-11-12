import React from 'react';

import './item.css';

export function Item(){
    return (
        <main>
            <h1>"Title"</h1>
                <div className="thumbnail-container">
                    <img src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                </div>
                <div className='info-section'>Release Date: </div>
                <div className='info-section'>Description: </div>
                <div className='input-group'>
                    <span>Rating:</span>
                    <input type="number" placeholder="Rating" />
                </div>
                <div className='input-group'>
                    <span>Review:</span>
                    <input type="text" placeholder="Review" />
                </div>
                <button type="submit">Submit</button>
                <div className='average-rating'>
                    <span>Average Rating: ***** (this will use websocket data to show the average rating of the media)</span>
                </div>
                <h2>Reviews (Websocket data)</h2>
                <div className='review-item'>
                    <span>Review by User123: (Placeholder)</span>
                </div>
        </main>

    );
}