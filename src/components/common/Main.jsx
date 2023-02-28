import React from "react";
import banner from "../../assets/img/Screenshot 2023-02-27 at 6.12.56 PM.png";
import "../../assets/css/style.css";
import like from "../../assets/img/heart.png";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img/3910455.jpeg"
import img2 from "../../assets/img/D347179109128453.5fcd1d1ba3e68.png"
import img3 from "../../assets/img/e4092f1fc203069b29f43df16bcaf852.jpeg"
import img4 from "../../assets/img/EEminem-Curtain-Call-2.webp"
import img5 from "../../assets/img/Emaxresdefault.jpeg"
import img6 from "../../assets/img/Katy-Perry.webp"
import img7 from "../../assets/img/maxresdefault.jpeg"
import img8 from "../../assets/img/medium-2pac-wiz-khalifa-snoop-dogg-hip-hop-matte-finish-poster-original-imag5qxxhr2tjkpn.webp"


const Main = () => {
  // let navigate = useNavigate();
  // ) {
  //   navigate('/play')
  // }
  return (
    <>
      <div class="main-container">
        <div className="title">
          <h1>Experience the Music!</h1>
        </div>
        <div class="sliderr">
          <div class="slider-wrapper">
            <img src={banner} alt="Image 1" />
          </div>
        </div>
        <div className="title">
          <h1>“Music, when soft voices die, vibrates in the memory.”</h1>
        </div>

        <div class="spotify-playlists">
          <h1>Spotify Playlists</h1>
          <div class="list">
            <div class="item" >
              <img src={img1} />
              <div class="play">
                <span class="fa fa-play"></span>
              </div>
              <div class="mid">
                <h4>Today's Top Hits</h4>
                <div class="rate"></div>
              </div>
              <p>Rema & Selena Gomez are on top of the...</p>
              <img src={like} id="like" />
            </div>


            <div class="item" >
              <img src={img2} />
              <div class="play">
                <span class="fa fa-play"></span>
              </div>
              <h4>Viva Latino</h4>
              <p>Today's top Latin hits elevando nuestra...</p>
              <img src={like} id="like" />
            </div>

            <div class="item" >
              <img src={img3} />
              <div class="play">
                <span class="fa fa-play"></span>
              </div>
              <h4>Mega Hit Mix</h4>
              <p>A mega mix of 75 favorites from the last...</p>
              <img src={like} id="like" />
            </div>

            <div class="item">
              <img src={img4} />
              <div class="play">
                <span class="fa fa-play"></span>
              </div>
              <h4>All out 80s</h4>
              <p>The biggest songs of the 1090s.</p>
              <img src={like} id="like" />
            </div>
          </div>
        </div>

        <div class="spotify-playlists">
          <h2>Romance</h2>
          <div class="list">
            <div class="item" >
              <img src={img5} />
              <div class="play">
                <span class="fa fa-play"></span>
              </div>
              <h4>Deep Focus</h4>
              <p>Keep calm and focus with ambient and pos...</p>
              <img src={like} id="like" />
            </div>
            <div class="item">
              <img src={img6} />
              <div class="play">
                <span class="fa fa-play"></span>
              </div>
              <h4>chill lofi study beats</h4>
              <p>The perfect study beats, twenty four...</p>
              <img src={like} id="like" />
            </div>

            <div class="item" >
              <img src={img7} />
              <div class="play">
                <span class="fa fa-play"></span>
              </div>
              <h4>Coding Mode</h4>
              <p>Dedicated to all the programmers out there.</p>
              <img src={like} id="like" />
            </div>
            <div class="item" >
              <img src={img8} />
              <div class="play">
                <span class="fa fa-play"></span>
              </div>
              <h4>Focus Flow</h4>
              <p>Uptempo instrumental hip hop beats.</p>
              <img src={like} id="like" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Main;
