import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Car from './pages/Car';
import DetailCar from './pages/DetailCar';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Main></Main>
        <Routes>
            <Route path="/car" element={<Car/>} />
            <Route path="/detailcar" element={<DetailCar/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
