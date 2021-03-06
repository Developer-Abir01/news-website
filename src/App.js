import logo from './logo.svg';
import './App.css';
import TopHeadLin from './Components/TopHeadLin/TopHeadLin';
import {Card, Button} from 'react-bootstrap';
import Navber from './Components/TopHeadLin/News/Navber/Navber';

function App() {

  return (
    <div className="App">
      <Navber></Navber>
    <TopHeadLin></TopHeadLin>
    </div>
  );
}

export default App;
