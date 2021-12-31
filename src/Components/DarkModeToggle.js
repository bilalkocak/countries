import React, {useContext} from 'react';
import {ThemeContext} from "../Context/ThemeContext";

const DarkModeToggle = () => {
    const [theme, setTheme] = useContext(ThemeContext);


    const toggleMode = () => {
        setTheme({mode: theme.mode === 'light' ? 'dark' : 'light'});
    };


    return (
        <button onClick={() => toggleMode()}>Change Mode</button>
    );

}


export default DarkModeToggle;
