import './App.css';
import qrCode from'./assets/qr-code.png'

function App() {
  return (
    <div className="App">
     <div className='qr-card'>
      <div className='qr-card-imagecontainer'>

      <img src={qrCode} alt='QR Code' className='qr-card-image'/>
      </div>
      <div className='qr-card-content'>
        <p className='headline'>Improve your front-end skills by building projects</p>
        <p className='content'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>

     </div>
    </div>
  );
}

export default App;
