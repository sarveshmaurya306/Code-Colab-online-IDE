
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import LandingPage from './pages/LandingPage';
import CodePenLayout from './pages/CodePen/components/CodePenLayout';

function App() {
  return (
    <>
    {/* creating global div so that toaster can access it anytime */}
    <div>
        <Toaster position="top-right"></Toaster>
    </div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/login' element={<Home/>}></Route>
            <Route path='/codepen' element={<CodePenLayout/>}></Route>
            {/* :roomId means that it is dynamic so : is used */}
            <Route path='/editor/:roomId' element={<EditorPage/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
