import './App.css';
import FetchContent from './components/FetchContent';
import DarkModeToggle from 'react-dark-mode-toggle'
import React, {useState} from 'react'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(()=> true)

  return (
   <div className={isDarkMode ? 'dark' : 'light'}>
    <div className="App">
        <div className="toggle">
          <DarkModeToggle onChange={setIsDarkMode}checked={isDarkMode}/>
        </div>
      <FetchContent />
    </div>
  </div>
  );
}

export default App;
