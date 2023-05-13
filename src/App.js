// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import VIP from './components/VIP';
import Guest from './components/Guest';
import Media from './components/Media';

import Success from './components/Success';
import Success2 from './components/Success2';
import Error from './components/Error';

import VIPRSVP from './components/VIPRSVP';
import GuestRSVP from './components/GuestRSVP';
import MediaRSVP from './components/MediaRSVP';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            <Route exact path="/" element={<Error />} />
            <Route exact path="*" element={<Error />} />

            <Route path="/vipregistration" element={<VIP />} />
            <Route path="/guestregistration" element={<Guest />} />
            <Route path="/mediaregistration" element={<Media />} />

            <Route path="/viprsvp" element={<VIPRSVP/>} />
            <Route path="/guestrsvp" element={<GuestRSVP />} />
            <Route path="/mediarsvp" element={<MediaRSVP />} />

            <Route path="/success" element={<Success />} />
            <Route path="/success2" element={<Success2 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
