import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Community from './components/Community/Community'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Category from './components/Category'
import Cookies from 'js-cookie'
import AddNotes from './components/AddNotes'
import ChatBot from './components/AiChatBot/ChatBot'

const App = () => {
  const [token,setToken] = useState(false);
  const authToken = Cookies.get('token');
  useEffect(()=>{
    if(authToken){
      setToken(true)
    }
  },[authToken])
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/community' element={<Community/>}/>
      <Route exact path='/signup' element={<SignUpForm setToken={setToken}/>}/>
      <Route exact path='/login' element={<LoginForm setToken={setToken}/>}/>
      <Route exact path='/category' element={<Category/>}/>
      <Route exact path='/chatbot' element={<ChatBot/>}/>
      <Route exact path='/share/notes' element={
        token?<AddNotes/>:<LoginForm setToken={setToken}/>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App