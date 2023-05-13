// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Success from './components/Success';
import Success2 from './components/Success2';
import Error from './components/Error';
import Registration from './components/Registration';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            <Route exact path="/" element={<Registration />} />
            <Route exact path="*" element={<Error />} />

            {/* <Route path="/registration" element={<Registration />} /> */}
            <Route path="/question" element={<Question />} />

            <Route path="/success" element={<Success />} />
            <Route path="/success2" element={<Success2 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
