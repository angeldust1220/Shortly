import { Routes, Route } from 'react-router-dom'
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const[login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const showLoginForm = useCallback(() => setLogin(!login), [login])
  const showSignupForm = useCallback(() => setSignup(!signup), [signup])

  const handleFormAppearance = useCallback(() => {
    const loginForm = document.getElementById('modal');
    if(loginForm === null) return

    //For closing modal when esc key is pressed
    window.addEventListener('keydown', (event) => {
      if(event.key === 'Escape'){
        loginForm.close();
        login && !signup ? showLoginForm() : showSignupForm();
      }
    })

    //For closing modal when Link tag is pressed
    if(login || signup){
      loginForm.showModal();
    }
    else{
      loginForm.close();
    }
  }, [login, signup, showLoginForm, showSignupForm])

  
  useEffect(() =>{
    handleFormAppearance()
  },[handleFormAppearance])

  return (
    <>
      <Header showLoginForm={showLoginForm} showSignupForm={showSignupForm}/>
      {login ? <Login showLoginForm={showLoginForm} showSignupForm={showSignupForm}/> : null}
      {signup ? <Signup showSignupForm={showSignupForm} showLoginForm={showLoginForm}/> : null}
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
      <Footer/>

      
    </>
  )
}

export default App
