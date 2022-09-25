import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home/Home'
import Todo from './Pages/Todo/Todo'
import Calender from './Pages/Calendar/Calendar'



function App() {
  return (
    <div className="App" style={{backgroundColor: '#041f4a'}}>
      <Header />
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='calendar' element={<Calender></Calender>}></Route>
          
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
