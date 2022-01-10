import './App.scss';
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import Layout from "./Components/Layout/Layout/Layout";
import ThemeController from "./Components/ThemeController";
import {StateProvider} from "./Context/ThemeContext";

function App() {
    return (
        <div className="App">
            <StateProvider>
                <ThemeController>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/:id" element={<Detail/>}/>
                        </Routes>
                    </Layout>
                </ThemeController>
            </StateProvider>

        </div>
    );
}

export default App;
