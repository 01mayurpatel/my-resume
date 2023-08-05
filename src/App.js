import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Main/Main";
import Body from "./components/Body/Body"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
// import ScrollToTop from "./ScrollToTop";
import Ideas from "./components/Ideas/Ideas"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/body" element={<Body/>}/>
        <Route path="/ideas" element={<Ideas/>}/>
        {/* <Route path="/register" element={<Register/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;