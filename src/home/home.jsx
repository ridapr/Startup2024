import React from 'react';
import {Link} from 'react-router-dom';

import './home.css';

export function Home() {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');


  React.useEffect(() => {
    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);
    
    return (
        <main>
            <h1>Home Page</h1>

            <div className='quote-box bg-light text-dark'>
                <p className='quote'>"{quote}" - {quoteAuthor}</p>
            </div>

            <h2>Movies - Popular This Week (This will use database data)</h2>
            
            <section className="movie-section">
                <div className="movie-item">
                    <Link to = "/item">
                        <img className="thumbnail" src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                        <div className="title">Avengers</div>
                    </Link>
                </div>

                <div className="movie-item">
                    <Link to = "/item">
                        <img className="thumbnail" src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                        <div className="title">Dune</div>
                    </Link>
                </div>

                <div className="movie-item">
                    <Link to = "/item">
                        <img className="thumbnail" src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                        <div className="title">Interstellar</div>
                    </Link>
                </div>

                <div className="movie-item">
                    <Link to = "/item">
                        <img className="thumbnail" src="thumbnail_placeholder.png" alt="thumbnail" width="200" height="300"/>
                        <div className="title">Bladerunner</div>
                    </Link>
                </div>
        
            </section>

        </main>
    );
}