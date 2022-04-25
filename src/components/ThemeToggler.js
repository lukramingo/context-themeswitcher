import React, {useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Colors';

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)
    const themeColor = AppTheme[themeMode]
    return(
        <div>
            <button style={{
                backgroundColor: "#7d0dfc",
                padding: "10px 100px",
                fontSize: "20px",
                color: "#fff",
                border: `${themeColor.border}`,
                cursor: "pointer",
                borderRadius: "10px"
            }}
            onClick={() => {
                setThemeMode(themeMode === "light"?"dark":"light")
            }}>{themeMode === "light"? "Turn Off" : "Turn On"}</button>
        </div>
    )
}

export default ThemeToggler;