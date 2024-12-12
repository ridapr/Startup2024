import React from 'react';
import { Button } from 'react-bootstrap'

import './item.css';

export function Item() {
    const [teststuff, setTeststuff] = React.useState("Starting Test");
    function handleClick_test() {
        console.log('Button clicked');
        fetch('api/test')
        .then((response) => response.json())
        .then((testing) => {
            console.log(testing);
            console.log(testing.test);
            setTeststuff(testing.test);
        });
    }    

//     const [reviews, setReviews] = React.useState([]);

//   // Demonstrates calling a service asynchronously so that
//   // React can properly update state objects with the results.
//   React.useEffect(() => {
//     fetch('/api/reviews')
//       .then((response) => response.json())
//       .then((reviews) => {
//         setReviews(reviews);
//       });
//   }, []);

//   // Demonstrates rendering an array with React
//   const reviewRows = [];
//   if (reviews.length) {
//     for (const [i, review] of reviews.entries()) {
//       reviewRows.push(
//         <tr key={i}>
//           <td>{i}</td>
//           <td>{review.name.split('@')[0]}</td>
//           <td>{review.review}</td>
//         </tr>
//       );
//     }
//   } else {
//     reviewRows.push(
//       <tr key='0'>
//         <td colSpan='4'>Be the first to write a review</td>
//       </tr>
//     );
//   }

    const [review, setReview] = React.useState('');

    function handleChange(event) {
        
        setReview(event.target.value);
        // const {name, value} = event.target;

        // setReview(prevReview => {
        //     return {
        //         ...prevReview,
        //         [name]: value
        //     }    
        // })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(review);
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
                    <span>Review:</span>
                    <input onChange={handleChange} name="text_review" value={review} placeholder="Review" />
                </div>
                <Button onClick={handleClick}>Submit</Button>
                
                <h2>Reviews (Websocket data)</h2>
                
                <Button onClick={handleClick_test}>Refresh Reviews (test)</Button>
                <div> {teststuff} </div>
                
                <div className='review-item'>
                    <span>Review by User123: (Placeholder)</span>
                </div>
        </main>

    );
}