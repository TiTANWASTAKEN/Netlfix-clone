import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2NiYTU2YmRkN2QzNzM4ZmRjNzM4ZmU0ZmUyYjQ4NSIsInN1YiI6IjY2NmZjZDNlZGY1NTVkYjM2MWE2NGJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2bdnuCT5lmL5rCwTHXAZk4fUOROAOuS1X3SebrW4vY'
    }
  };
  
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
        if (!response.ok) {
          throw new Error('Failed to fetch video data');
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const videoData = data.results[0];
          setApiData({
            name: videoData.name,
            key: videoData.key,
            published_at: videoData.published_at,
            type: videoData.type,
          });
        } else {
          throw new Error('No video data available');
        }
      } catch (error) {
        console.error('Error fetching video data:', error.message);
      }
    };

    fetchVideoData();
  }, [id, options]);

  const handleBack = () => {
    navigate(-1); // Go back one step in history (equivalent to clicking the browser's back button)
  };

  return (
    <div className='player'>
      <img onClick={handleBack} src={back_arrow_icon} alt='Back' />
      <iframe 
        width='90%' 
        height='90%' 
        src={`https://www.youtube.com/embed/${apiData.key}`} 
        title='trailer' 
        frameBorder='0' 
        allowFullScreen 
      />
      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : ""}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
