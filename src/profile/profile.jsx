import React from 'react';

export function Profile() {
    return (
        <main>
            <h1>Profile Page</h1>
            <img src="account_placeholder.png" alt="Profile Picture" width="100" height="100"/>
            <h1>Profile Name Placeholder</h1>
            <p>Placeholder for Profile info/stats</p>
            <h2>Recent Reviews</h2>
            <ul class="recent-reviews">
            <li class="review-box">
                <div class="review-title">Review Title 1</div>
                <div class="review-rating">Rating: 4.5 stars</div>
            </li>
            <li class="review-box">
                <div class="review-title">Review Title 2</div>
                <div class="review-rating">Rating: 3.0 stars</div>
            </li>
            <li class="review-box">
                <div class="review-title">Review Title 3</div>
                <div class="review-rating">Rating: 5.0 stars</div>
            </li>
            <li class="review-box">
                <div class="review-title">Review Title 4</div>
                <div class="review-rating">Rating: 2.5 stars</div>
            </li>
            </ul>
        </main>
    );
}    