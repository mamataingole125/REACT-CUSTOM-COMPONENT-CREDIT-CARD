import logo from './logo.svg';
import './App.css';
import Pin from './component/Pin';
import { useState } from 'react';

function App() {
  const [otp,setOtp]=useState("")

  return (
    <div className="App">
      <Pin length={4} setOtpHandler={(value)=>setOtp(value)} />
      <h3>OTP is {otp}</h3>
    </div>
  );
}

export default App;
