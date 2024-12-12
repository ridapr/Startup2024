import React from 'react';

import './login.css';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';


export function Login() {
    return (
        <main className="login-container">
            <h1>Welcome - Login Page</h1>
            <form method="get" action="play.html">
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
            </form>
        </main>
    );
}

// export function Login_test({ userName, authState, onAuthChange }) {
//     return (
//       <main className='login-container'>
//         <div>
//           {authState !== AuthState.Unknown && <h1>Welcome - Login Page</h1>}
//           {authState === AuthState.Authenticated && (
//             <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
//           )}
//           {authState === AuthState.Unauthenticated && (
//             <Unauthenticated
//               userName={userName}
//               onLogin={(loginUserName) => {
//                 onAuthChange(loginUserName, AuthState.Authenticated);
//               }}
//             />
//           )}
//         </div>
//       </main>
//     );
//   }