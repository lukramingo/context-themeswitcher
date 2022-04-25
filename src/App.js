import React, {useState} from 'react';
import ThemeContext from './Context/ThemeContext';
import MainSection from './components/MainSection';

const App = () => {
  const themeHook = useState("light")
  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <MainSection/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;