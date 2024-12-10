import React from 'react';
import { Button } from 'react-bootstrap'

import './item.css';

export function Item(){
    const [teststuff, setTeststuff] = React.useState("Starting Test");
    function handleClick() {
        console.log('Button clicked');
        fetch('api/test')
        .then((response) => response.json())
        .then((testing) => {
            console.log(testing);
            console.log(testing.test);
            setTeststuff(testing.test);
        });
    }    

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
                
                <Button onClick={handleClick}>Refresh Reviews (test)</Button>
                <div> {teststuff} </div>
                
                <div className='review-item'>
                    <span>Review by User123: (Placeholder)</span>
                </div>
        </main>

    );
}