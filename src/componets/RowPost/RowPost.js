import React, { useState, useEffect } from 'react';
import { imageUrl, Api_key } from '../constant/constant';
import YouTube from 'react-youtube';
import axios from '../../axios';

const RowPost = (props) => {
  const [poster, setPoster] = useState([]);
  const [urlId, setUrlId] = useState('');
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setPoster(response.data.results);
    }).catch((err) => {
      alert("network error");
    });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${Api_key}`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
        setShowVideo(true); // Show the video when data is available
      } else {
        console.log('No data');
        setUrlId('');
        setShowVideo(false); // Hide the video when there's no data
      }
    }).catch((err) => {
      console.log('error fetching movie video', err);
      setUrlId('');
      setShowVideo(false); // Hide the video on error
    });
  };

  const closeVideo = () => {
    setUrlId('');
    setShowVideo(false); // Hide the video when the close button is clicked
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {poster.map((obj) => (
          <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : "poster"} src={`${imageUrl + obj.backdrop_path}`} alt='posters' />
        ))}
      </div>
      {showVideo && (
        <div>
          <button onClick={closeVideo}>Close Video</button>
          <YouTube opts={opts} videoId={urlId.key} />
        </div>
      )}
    </div>
  );
};

export default RowPost;
