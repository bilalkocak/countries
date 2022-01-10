import React, {useContext} from 'react';
import {ThemeContext} from "../Context/ThemeContext";
import {Moon, MoonSc} from "./Icons";

const DarkModeToggle = () => {
    const [theme, setTheme] = useContext(ThemeContext);


    const toggleMode = () => {
        setTheme({mode: theme.mode === 'light' ? 'dark' : 'light'});
    };


    return (
        <div
            onClick={() => toggleMode()}
             className={'toggle-button'}>
            {theme.mode==="dark"?<MoonSc/>:<Moon/>} {theme.mode} Mode
        </div>
    );

}


export default DarkModeToggle;
