import './App.css';
import Navbar from './componets/Navbar';
import Chat from './componets/Chat';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './componets/Login';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
