import BookImage from '../assets/images/book.png'
import PlusImage from '../assets/images/plus.png'
import GlobeImage from '../assets/images/globe.png'


function Library() {
  return (
    <div className="libraryContainer">
        <img src={BookImage} alt="book image" style={{width: '30px'}} />
        <p>Your Library</p>
        <img src={PlusImage} alt="plus image" className="plusImage" />
      <div className="playlistContainer">
        <p style={{fontWeight: 'bold'}}>Create your first playlist</p>
        <p>It's easy, we'll help you</p>
        <button>Create Playlist</button>
      </div>
      <div className="podcastsContainer">
        <p style={{fontWeight: 'bold'}}>Let's find some podcasts to follow</p>
        <p>We'll keep you updated on new episodes</p>
        <button>Browse products</button>
      </div>
      <div className="contactContainer">
        <p>Legal</p>
        <p>Privacy Center</p>
        <p>Privacy Policy</p>
        <p>Cookie Settings</p>
        <p>About Ads</p>
        <p>Accessibility</p>
        <p>Cookies</p>
        <div className="englishButton">
        <button><img src={GlobeImage} alt="globe image"/>English</button>
        </div>
      </div>
    </div>
  )
}

export default Library
