import React from "react";
import Player from "../components/songs/Player";
import Header from "../components/common/Header";
import SongList from "../components/songs/SongList";
import songs from "../data/songs.json";
import "../assets/css/Play.css";
import SongDetail from "../components/songs/SongDetail";
import SongListHeader from "../components/songs/SongListHeader";

for (let index = 0; index < songs.length; index++) {
  const song = songs[index];
  song.id = index;
}

const Play = () => {
  return (
    <React.Fragment>
        <Header />
      <div className="play-page">
        <SongListHeader />
        <SongDetail />
        <SongList songs={songs} />
        <Player />
        <a href="#focused" id="focus-link" hidden>
          Go to playing element
        </a>
      </div>
    </React.Fragment>
  );
};

export default Play;
