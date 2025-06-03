'use client';

import React from 'react';
import './Home.css';
import Link  from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const logo = './pictures/Food4Thought.png';
const instagram = './pictures/instagram-icon.png';
const twitter = './pictures/twitter-icon.png';
const facebook = './pictures/facebook-icon.png';
const tiktok = './pictures/tiktok-icon.png';
const newspaper = './pictures/newspaper.jpg';
const western = './pictures/western-demo.png';
const yongtaufu = './pictures/yong-tau-fu-demo.jpg';
const nasilemak = './pictures/nasi-lemak-demo.jpg';
const star = './pictures/star.png';
const halfstar = './pictures/half-star.png';
const foodtrailbackground = './pictures/food-trail-background.jpg';
const chickenrice = './pictures/chicken-rice.png';
const malayrice = './pictures/nasi-lemak.png';
const nasibriyani = './pictures/nasi-briyani.png';


function Home() {


    const images: { src: string; description: string }[] = [
        { src: chickenrice, description: "Hainanese Chicken Rice - A Singaporean classic!" },
        { src: malayrice, description: "Nasi Lemak - Fragrant rice with spicy sambal and more." },
        { src: nasibriyani, description: "Nasi Briyani - Aromatic spiced rice with tender meat." }
        ];

    return (
        <div className="Home"> 
            <div className="background-img-1"></div>
            <div className="Grey-box-1">
                <img id="Logo-1" src={logo} alt="Food 4 Thought Logo" />
                <img id="Instagram" src={instagram} alt="Instagram icon" />
                <img id="Twitter" src={twitter} alt="Twitter icon" />
                <img id="Facebook" src={facebook} alt="Facebook icon" />
                <img id="Tiktok" src={tiktok} alt="Tiktok icon" />
                <div className="Welcome-1">Welcome Benjamin,</div>
            </div>
                <div className="text-box-1">
                  <div className="Grey-box-2">
                    <Link href="/cuisinePage" className="Cuisines-text-1">Cuisines</Link>
                    <div className="Popular-text-1">Popular</div>
                    <div className="Home-text-1">Home</div>
                    <div className="About-text-1">About</div>
                    <div className="Create-food-trail-text-1">Create food trail today!</div>
                </div>
                <div className="Black-box-1">
                  <div className="Trending">Trending today!</div>  
                </div>
                <Swiper className="swiper-side"
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop
                    spaceBetween={20}
                    slidesPerView={1}
                >
                {images.map((item, idx) => (
                    <SwiperSlide key={idx}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img 
                          src={item.src}
                          alt={`carousel ${idx}`} 
                          style={{ width: "100%", borderRadius: "10px" }} 
                    /><p className="carousel-description">{item.description}
                    </p>
                     </div>
                    </SwiperSlide>
                ))}

                </Swiper>
                <br></br><br></br><br></br>
                <div className="Black-box-2">
                    <div className="Fresh-from-community-text">Fresh from the community</div>
                </div>
                <div className="Newspaper-container">
                    <img id="Newspaper" src={newspaper} alt="Newspaper" />
                    <div className="Newspaper-overlay"></div>
                    <div className="Comment-1-box">
                        <div className="Comment-1-text">Cheap and affordable western at ang mo kio coffeeshop</div>
                        <img id="Western-demo" src={western} alt="Western food demo" />
                        <img id="rating-1" src={star} alt="4.5 stars rating-1" />
                        <img id="rating-2" src={star} alt="4.5 stars rating-2" />
                        <img id="rating-3" src={star} alt="4.5 stars rating-3" />
                        <img id="rating-4" src={star} alt="4.5 stars rating-4" />
                        <img id="rating-5" src={halfstar} alt="4.5 stars rating-5" />
                        <div className="Username-1">By: Foodreviewer123</div>
                    </div>
                    <div className="Comment-2-box">
                        <div className="Comment-2-text">Best Yong Tau Fu in Singapore, must try!</div>
                        <img id="Yong-Tau-Fu-demo" src= {yongtaufu} alt="Yong Tau Fu demo" />
                        <img id="rating-6" src={star} alt="4.5 stars rating-6" />
                        <img id="rating-7" src={star} alt="4.5 stars rating-7" />
                        <img id="rating-8" src={star} alt="4.5 stars rating-8" />
                        <img id="rating-9" src={star} alt="4.5 stars rating-9" />
                        <img id="rating-10" src={halfstar} alt="4.5 stars rating-10" />
                        <div className="Username-2">By: ilovefood123</div>
                    </div>
                    <div className="Comment-3-box">
                        <div className="Comment-3-text">Best nasi lemak in Singapore, must try!</div>
                        <img id="Nasi-Lemak-demo" src= {nasilemak} alt="Nasi Lemak demo" />
                        <img id="rating-11" src={star} alt="5 stars rating-11" />
                        <img id="rating-12" src={star} alt="5 stars rating-12" />
                        <img id="rating-13" src={star} alt="5 stars rating-13" />
                        <img id="rating-14" src={star} alt="5 stars rating-14" />
                        <img id="rating-15" src={star} alt="5 stars rating-15" />
                        <div className="Username-3">By: foodislife123</div>
                    </div>
                </div>
                <button type="submit" className="See-all-button">See more</button>
                <div className="Image-container">
                    <img id="Food-trail-background" src={foodtrailbackground} alt="Food trail background"/>
                    <Link href="../food-trail" className="Hover-button-link">Create your food trail!</Link>
                    <div className="Dark-overlay"></div>
                </div>
                <div className="Quote">~Redefining food discovery~</div>
            </div>
        </div> 
    );
}

export default Home;