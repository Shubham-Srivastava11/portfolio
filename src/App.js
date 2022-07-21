import logo from './logo.svg';
import './App.css';
import FirstLook from './Components/FirstLook/FirstLook';
import AbstractiveView from './Components/AbstractiveView/AbstractiveView';
import SkillSet from './Components/SkillSet/SkillSet';

function App() {
  return (
    <div className="App">
      <FirstLook />
      <AbstractiveView />

      <SkillSet />
    </div>
  );
}

export default App;
