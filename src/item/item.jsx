import React from 'react';
import { Button } from 'react-bootstrap'

import './item.css';

export function Item(props) {
    const userName = props.userName;
    // retrieve reviews from database
    // const [getReview, setGetReview] = React.useState("Please refresh reviews");
    // function handleClick_test() {
    //     console.log('Button clicked');
    //     fetch('api/reviews')
    //     .then((response) => response.json())
    //     .then((get_review) => {
    //         console.log(get_review);
    //         console.log(get_review.review);
    //         setGetReview(get_review.review);
    //     });
    // }    
    const [db_reviews, setdb_reviews] = React.useState(null);

    // React.useEffect(() => {
    //     const fetchReviews = async () => {
    //         const response = await fetch('/api/reviews');
    //         const json = await response.json();

    //         if (response.ok) {
    //             setdb_reviews(json);
    //         }
    //     }
        
    // } , []);   
    const fetchReviews = React.useCallback(async () => {
        const response = await fetch('/api/reviews');
        const json = await response.json();
        if (response.ok) {
            setdb_reviews(json);
        }

       
    }, []);    

    // const [teststuff, setTeststuff] = React.useState("Starting Test");
    // function handleClick_test() {
    //     console.log('Button clicked');
    //     fetch('api/test')
    //     .then((response) => response.json())
    //     .then((testing) => {
    //         console.log(testing);
    //         console.log(testing.test);
    //         setTeststuff(testing.test);
    //     });
    // }    
    // end of retrieve reviews from database

    // save review to database
    async function saveReview(review) {
        const newReview = { name: userName, review: review };
    
        await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newReview),
        });
    }    

    const [review, setReview] = React.useState('');

    function handleChange(event) {
        setReview(event.target.value);
    }
    
    function handleClick_submit(event) {
        event.preventDefault();
        console.log(review);
        saveReview(review);
        console.log('Review saved');
    }
    // end of save review to database

    return (
        <main>
            <h1>"Title"</h1>
                <div className="thumbnail-container">
                    <img src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                </div>
                <div className='info-section'>Release Date: </div>
                <div className='info-section'>Description: </div>
            
                <div className='input-group'>
                    <span>Review:</span>
                    <input onChange={handleChange} name="text_review" value={review} placeholder="Review" />
                </div>
                <Button onClick={handleClick_submit}>Submit</Button>
                
                <h2>Reviews (Websocket data)</h2>
                
                <Button onClick={handleClick_refresh}>Refresh Reviews (test)</Button>

                <div className='review-item'>
                    {db_reviews && db_reviews.slice().reverse().map((db_review) => (
                        <div key={db_review._id}>
                            {db_review.name}: {db_review.review}
                        </div>
                    ))}
                </div>
               
        </main>

    );
}