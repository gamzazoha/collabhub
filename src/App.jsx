import './App.css';
import { Route, Routes } from 'react-router-dom';
import Detail from './route/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>메인페이지</h1>}/>
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
