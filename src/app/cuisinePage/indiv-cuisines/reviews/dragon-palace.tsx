import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../style/dragon-palace.css';
import logo from '../pictures/Food4Thought.png';
import dragonpalaceimg1 from '../pictures/dragon-palace-pic-1.jpg';
import dragonpalaceimg2 from '../pictures/dragon-palace-pic-2.jpg';


function DragonPalace() {
    return (
        <div className="DragonPalace">
            {/* Background image as a separate layer */}
            <div className="background-layer" />
            <div className="content-layer">
                <img id="Logo-6" src={logo} alt="Food 4 Thought Logo" />
                <div className="text-box-6">
                    <div className="dragon-palace-header">Dragon Palace</div>
                    <img id="dp-img-1" src={dragonpalaceimg1} alt="Dragon palace image 1"></img>
                    <img id="dp-img-2" src={dragonpalaceimg2} alt="Dragon palace image 2"></img>
                    <div className="Dragon-Palace-Comment-1">
                        <div className="Dragon-Palace-Comment-1-text">
                            Dragon Palace serves flavors that taste like home! The Mapo Tofu was tangy, spicy, and packed with umami, while the Sweet & Sour Pork was crispy and perfectly balanced. 
                            Loved the Simple Fried Prawns—simple yet comforting. 
                            The Yangzhou Fried Vegetables were fragrant, and the Chive & Pork Dumplings were juicy and flavorful.
                            Generous portions, friendly service, and truly authentic flavors. A must-visit for anyone craving real Sichuan & Hunan cuisine in Singapore! Will be back!
                        </div>
                        <div className="comment-1-user">
                            By: Pokemon123
                        </div>
                    </div>   
                    <div className="Dragon-Palace-Comment-2">
                        <div className="Dragon-Palace-Comment-2-text">
                            Totally agree with you! Dragon Palace really hits that comforting, homey vibe—everything tastes just like I would hope for. 
                            The Mapo Tofu is so good, and the Sweet & Sour Pork is always on point. 
                            Those Chive & Pork Dumplings? So good too. Love the generous portions too, and the staff are always super friendly. Can’t wait to go back for more!
                        </div>
                        <div className="comment-2-user">
                            By: Naruto123
                        </div>
                    </div>
                    <div className="Dragon-Palace-Comment-3"> 
                        <div className="Dragon-Palace-Comment-3-text">
                             Glad you enjoyed the flavors! I thought the food was pretty tasty too, especially the Mapo Tofu and dumplings. 
                             But honestly, the portions felt a bit small for me, and the service was not as great as I hoped. 
                             Still, the taste was solid—just wish the overall experience matched the flavors.
                        </div>
                        <div className="comment-3-user">
                            By: JJK123
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DragonPalace;