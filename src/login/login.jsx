import React from 'react';

export function login() {
    return (
        <main>
        <h1>Welcome - Login Page</h1>
        <form method="get" action="play.html"></form>
            <div>
                <span>Email:</span>
                <input type="text" placeholder="your@email.com" />
            </div>
            <div>
                <span>Password:</span>
                <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
            <button type="submit">Create</button>
        </main>
    );
}