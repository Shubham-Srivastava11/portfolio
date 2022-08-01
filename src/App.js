import logo from './logo.svg';
import './App.css';
import FirstLook from './Components/FirstLook/FirstLook';
import AbstractiveView from './Components/AbstractiveView/AbstractiveView';
import SkillSet from './Components/SkillSet/SkillSet';
import ProjectView from './Components/ProjectView/ProjectView';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <FirstLook />
      {/* <Navbar /> */}
      <AbstractiveView />
      <SkillSet />
      <ProjectView />
      <Contact />
    </div>
  );
}

export default App;
