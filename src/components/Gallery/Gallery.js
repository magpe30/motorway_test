import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';

const Gallery = ({setSelectedImg}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('images?limit=10', {
      _method: 'PATCH',
      crossDomain: true,
      xhrFields: {
          withCredentials: true
      },
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': ''
      },
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        setImages(data);
        console.log(data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  
  return (
    <div className='app'>
        <div className="gallery-container">
          <h1 className= "heading-text">gallery</h1>
        </div>
        <div className="img-group">
          {
          
            images && images.map((img, index) => (
              <motion.div className="img-wrap" key={index} onClick = {() => setSelectedImg(`${img.url}.jpg`)}
                initial={{scale:0}} animate={{scale:1}}
              >
                <img src={`${img.url}.jpg`} alt={`${img.alt_description}.jpg`} className ='img-main'/>
                <img src={`${img.user.profile_image}.webp`} alt='User Logo' className='img-user'/>
                <p className="img-description">{img.alt_description}</p>
              </motion.div>
            ))
          }
        </div>
    </div>
  );
}

export default Gallery;
