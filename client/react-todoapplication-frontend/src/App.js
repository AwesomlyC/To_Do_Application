import './App.css';
import ListTaskComponent from './components/ListTaskComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddTaskComponent from './components/AddTaskComponent';
import HomePageComponent from './components/HomePageComponent'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path = "/" Component={HomePageComponent}></Route>
            <Route path = "/list" Component={ListTaskComponent}></Route>
            <Route path = "/add-task" Component={AddTaskComponent}></Route>
            <Route path = "/home" Component={HomePageComponent}></Route>

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
