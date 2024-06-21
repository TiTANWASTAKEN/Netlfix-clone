import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
// Assuming cards_data is imported but not used in this corrected version
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2NiYTU2YmRkN2QzNzM4ZmRjNzM4ZmU0ZmUyYjQ4NSIsInN1YiI6IjY2NmZjZDNlZGY1NTVkYjM2MWE2NGJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2bdnuCT5lmL5rCwTHXAZk4fUOROAOuS1X3SebrW4vY'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <div className='titlecards'>
      <h2>{title ? title : 'Popular on Netflux'}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt='' />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
