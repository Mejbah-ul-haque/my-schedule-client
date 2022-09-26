import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home/Home'
import Todo from './Pages/Todo/Todo'
import Calender from './Pages/Calendar/Calendar'
import Contact from './Pages/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App" style={{backgroundColor: '#041f4a'}}>
      <Header />
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='calendar' element={<Calender></Calender>}></Route>
          
          
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
