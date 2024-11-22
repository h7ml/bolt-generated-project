import React, { useState, useEffect } from 'react';

const BingWallpaper = ({ children }) => {
  const [wallpaperUrl, setWallpaperUrl] = useState('');

  useEffect(() => {
    const fetchWallpaper = async () => {
      try {
        // 由于跨域限制，我们需要使用代理服务器来获取必应壁纸
        const response = await fetch('https://api.allorigins.win/raw?url=https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');
        const data = await response.json();
        const imageUrl = `https://www.bing.com${data.images[0].url}`;
        setWallpaperUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching Bing wallpaper:', error);
      }
    };

    fetchWallpaper();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${wallpaperUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BingWallpaper;
