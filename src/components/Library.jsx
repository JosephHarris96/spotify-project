import BookImage from '../assets/images/book.png'
import PlusImage from '../assets/images/plus.png'


function Library() {
  return (
    <div className="libraryContainer">
        <img src={BookImage} alt="book image" style={{width: '30px'}} />
        <p>Your Library</p>
        <img src={PlusImage} alt="plus image" className="plusImage" />
      <div className="playlistContainer">
      </div>
    </div>
  )
}

export default Library
