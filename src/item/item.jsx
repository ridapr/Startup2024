import React from 'react';

export function Item(){
    return (
        <main>
            <h1>"Title"</h1>
                <div>
                    <img src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                </div>
                <div>Release Date: </div>
                <div>Description: </div>
                <div>
                    <span>Rating:</span>
                    <input type="number" placeholder="Rating" />
                </div>
                <div>
                    <span>Review:</span>
                    <input type="text" placeholder="Review" />
                </div>
                <button type="submit">Submit</button>
                <div>
                    <span>Average Rating: ***** (this will use websocket data to show the average rating of the media)</span>
                </div>
                <h2>Reviews (Websocket data)</h2>
                <div>
                    <span>Review by User123: (Placeholder)</span>
                </div>
        </main>

    );
}