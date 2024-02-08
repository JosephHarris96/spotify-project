import Homepage from './components/Homepage'
import Library from './components/Library';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Homepage />
      <div className="wrapper">
      <Library />
      <Sidebar />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
