import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Hero from './components/Hero';
const App = () => {
  const [tracks, setTracks] = useState([]);
  const [isclicked,setClicked] = useState(false)
  const getTracks = async (query) => {
    try {
      setClicked(true)
      const response = await fetch(`https://v1.nocodeapi.com/bhargav/spotify/LqGtbKXzOwaBxgpF/search?q=${query}&type=track`);
      const data = await response.json();
      setTracks(data.tracks.items);
    } catch (error) {
      console.log('Error fetching tracks:', error);
    }
  };

  return (
    <div className='bg-black min-h-screen '>
      <Navbar getTracks={getTracks} />
      {
        isclicked===false?<Hero></Hero>:
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
        {
        tracks.map((element, index) => (
          <Card element={element} key={index} />
        ))}
      </div>
      }
      
    </div>
  );
};

export default App;
