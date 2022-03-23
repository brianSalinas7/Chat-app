import {Routes, Route} from 'react-router-dom'
import Chat from './Components/Chat';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />

      </Routes>
    </>
  );
}

export default App;
