import Axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  
  // GET photos from server
  const getPhotos = () => {
    Axios({
      method: 'GET',
      url:'/gallery'
    })
    .then( response => {
      console.log('Getting Data:', response.data);
      setGalleryList(response.data);
    })
    .catch( err => {
      console.log('Error getting gallery', err);
    })
  }

  // PUT photo likes
  const photoLiked = (photoId) => {
    axios({
      method:'PUT',
      url: `/gallery/like/${photoId}`
    })
    .then( response => {
      getPhotos();
    })
    .catch( err => {
      console.log('Error recording Like', err);
    })
  }
// RETURN content to DOM 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList />
      </div>
    );
}

export default App;
