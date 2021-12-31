import './App.css';
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<Detail/>}/>
            </Routes>
        </div>
    );
}

export default App;
