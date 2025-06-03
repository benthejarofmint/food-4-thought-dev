// CuisinePage.tsx
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './cuisinePage.css';
import ChineseCuisine from './indiv-cuisines/chineseCuisine';

const logo = '/pictures/Food4Thought.png';
const instagram = '/pictures/instagram-icon.png';
const twitter = '/pictures/twitter-icon.png';
const facebook = '/pictures/facebook-icon.png';
const tiktok = '/pictures/tiktok-icon.png';

// consting cuisine images
const westernImg = './pictures/western-demo.png';
const chineseImg = './pictures/chinese.png';
const indianImg = './pictures/indian.png';
const japaneseImg = './pictures/japanese.png';
const koreanImg = './pictures/korean.png';
const thaiImg = './pictures/thai.png';
const vietImg = './pictures/viet.png';
const malayImg = './pictures/malay.png';

function CuisinePage() {
  const route = useRouter();

  const handleCuisineClick = (cuisineName: string) => {
    if (cuisineName === 'Chinese') {
      route.push('./indiv-cuisines/chineseCuisine');
    } else {
      alert(`${cuisineName} page not implemented yet!`);
    }
  };

  const cuisines = [
    { name: 'Western', img: westernImg },
    { name: 'Chinese', img: chineseImg },
    { name: 'Indian', img: indianImg },
    { name: 'Japanese', img: japaneseImg },
    { name: 'Korean', img: koreanImg },
    { name: 'Thai', img: thaiImg },
    {name: 'Vietnamese', img: vietImg },
    { name: 'Malaysian', img:malayImg }
    // Add more as needed
  ];

  return (
    <div className="CuisinePage">
      <div className="background-img"></div>
      <div className="header-box">
        <img id="Logo" src={logo} alt="Food 4 Thought Logo" />
        <img id="Instagram" src={instagram} alt="Instagram icon" />
        <img id="Twitter" src={twitter} alt="Twitter icon" />
        <img id="Facebook" src={facebook} alt="Facebook icon" />
        <img id="Tiktok" src={tiktok} alt="Tiktok icon" />
      </div>
      <div className="main-box">
        <h1 className="page-title">Choose Your Cuisine !</h1>
        <div className="cuisine-grid">
          {cuisines.map((cuisine, index) => (
            <div
              key={index}
              className="cuisine-item"
              onClick={() => handleCuisineClick(cuisine.name)}
            >
              <img src={cuisine.img} alt={`${cuisine.name} icon`} className="cuisine-img" />
              <div className="cuisine-name">{cuisine.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CuisinePage;

