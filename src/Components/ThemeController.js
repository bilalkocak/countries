import {useContext} from "react";
import {ThemeContext} from "../Context/ThemeContext";

const ThemeController = ({ children }) => {
    const [theme] = useContext(ThemeContext);


    return (
        <div className={`app app--${theme.mode}`}>
            { children }
        </div>
    );
}


export default ThemeController;
