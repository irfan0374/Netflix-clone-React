import './App.css'
import Navbar from './componets/Navbar/navBar';
import Banner from './componets/Banner/Banner';
import RowPost from './componets/RowPost/RowPost';
import './componets/RowPost/RowPost.css'
import { originals,Actions,comedyMovie } from './urls';


function App() {
 
  return (
    <div>
  <Navbar/>
  <Banner/>
  <RowPost url={originals} title='Netflix Original'/>
  <RowPost url={Actions} title='Action Movies' isSmall />
  <RowPost url={comedyMovie} title='Comedy Movies' isSmall />
    </div>
  )
  }

export default App;
