import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
