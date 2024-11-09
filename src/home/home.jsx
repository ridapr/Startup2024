import React from 'react';

export function home() {
    return (
        <main>
            <h1>Home Page</h1>
            <h2>Movies - Popular This Week (This will use database data)</h2>
            
            <section class="movie-section">
                <div class="movie-item">
                    <a href="item.html">
                    <img class="thumbnail" src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                    <div class="title">
                        Avengers
                    </div>
                    </a>
                </div>
                <div class="movie-item">
                    <a href="item.html">
                    <img class="thumbnail" src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                    <div class="title">
                        Dune
                    </div>
                    </a>
                </div>
                <div class="movie-item">
                    <a href="item.html">
                    <img class="thumbnail" src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                    <div class="title">
                        Interstellar
                    </div>
                    </a>
                </div>
                <div class="movie-item">
                    <a href="item.html">
                    <img class="thumbnail" src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                    <div class="title">
                        Bladerunner: 2047
                    </div>
                    </a>
                </div>
            </section>

        </main>
    );
}