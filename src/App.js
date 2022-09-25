import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home'
import Todo from './Pages/Todo/Todo'
import Calendar from './Pages/Calendar/Calendar'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/calender' element={<Calendar />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
