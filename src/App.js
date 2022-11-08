
import './App.css';
import Experience from './components/Experience';
import Educator from './components/Educator';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App-container">
      <Profile/>
      <hr></hr>
      <Experience/>
      <hr></hr>
      <Educator/>
      <hr></hr>
      <Skills/>
      <hr></hr>
      <Hobbies/>
      <hr></hr>
    </div>
  );
}

export default App;
