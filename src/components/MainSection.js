import React, {useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import ThemeToggler from './ThemeToggler';
import AppTheme from '../Colors';

const MainSection = () => {
const theme = useContext(ThemeContext)[0]
const currentTheme = AppTheme[theme]
return(
    <div style={{
        paddingTop: "200px", 
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
        height: "100vh",
    }}>
        <h1>Context API theme toggler</h1>
        <p>This is nice paragraph</p>
        <ThemeToggler/>
    </div>
)
}

export default MainSection;
