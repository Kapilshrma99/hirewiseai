import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './pages/TestPage';
import Dashboard from './pages/Dashboard';
import ApplyForm from "./pages/ApplyForm";
import Post_job from "./pages/Post_job";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Partner from './pages/partner';
import Aboutus from './pages/Aboutus';
import Solution from './pages/Solution';



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path="/test/:jobId/:candidateId" element={<TestPage />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/apply/:jobId" element={<ApplyForm />}/>
        <Route path="/post-job" element={<Post_job/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Partner/>
      <Aboutus/>
      <Solution/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
