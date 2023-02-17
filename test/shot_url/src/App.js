import { useState } from 'react';
import './App.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';
import QRCode from "react-qr-code";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [ text, settext]=useState("")
function generateQR  (e) {
    settext()
  }
  function handleChage(e){
    settext(e.target.value)
  }

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />

      {/* qr code */}
      <LinkResult inputValue={inputValue} />
      <h2>QR <span> CODE generator</span></h2>
      <QRCode value={text} />
      <div className='input-here'>
        <p className='p'>Place Short Url</p>
        <input  className='text'  type='text' value={text}onChange={(e)=>
        {handleChage(e)}}/>
      </div>
    </div>
  );
}
export default App;