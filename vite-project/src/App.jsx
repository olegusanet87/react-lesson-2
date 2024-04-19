import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
  const handleclick = () => {
    alert("I'm a button");
  };
  return <button onClick={handleclick}>Click me!</button>
}