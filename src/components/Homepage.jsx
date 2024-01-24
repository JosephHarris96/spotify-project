import React from "react";
import SpotifyImage from "../assets/images/spotify.png";
import HomeImage from "../assets/images/home.png";
import SearchImage from "../assets/images/search-interface-symbol.png";

function Homepage() {
  return (
    <div className="container">
      <div className="homepageContainer">
        <div className="spotifyContainer">
            <img src={SpotifyImage} alt="spotifyImage" style={{width: '30px'}} />
            <p>Spotify</p>
        </div>
        <div className="homeContainer">
          <img src={HomeImage} alt="home image" style={{ width: "30px" }} />
          <p>Home</p>
        </div>
        <div className="searchContainer">
            <div className="searchContent">
          <img src={SearchImage} alt="search image" style={{ width: "30px"}} />
          <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
