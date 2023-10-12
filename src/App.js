import { Home } from "./pages/Home";
import {About} from "./pages/About"
import {SignOut} from "./pages/SignOut"
import {Signup} from "./pages/Signup"
import {Profile} from "./pages/Profile"
import  {BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./pages/Header";


function App() {
  return (
    <BrowserRouter>
    <Header/>
   
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/sign-up"element={<Signup/>}/>
      <Route path="/sign-out"element={<SignOut/>}/>
      <Route path="/profile"element={<Profile/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
