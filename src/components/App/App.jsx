import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  
  // GET photos from server
  const getPhotos = () => {
    axios({
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
    console.log('in put');
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

// Run GET on page load
useEffect( () => {
    getPhotos();
  }, []);

// RETURN content to DOM 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Life in Polaroid</h1>
        </header>
        <GalleryList photoLiked={photoLiked} getPhotos={getPhotos} galleryList={galleryList} />
      </div>
    );
}

export default App;
