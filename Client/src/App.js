import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TraineeLayoutPage from './Pages/TraineeLayout';
import TraineesListPage from './Pages/TraineesListPage';
import TraineesEditPage from './Pages/TraineeEditPage';
import TraineesAddPage from './Pages/TraineeAddPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TraineeLayoutPage />}></Route>
          <Route path="/trainee" element={<TraineesListPage />}></Route>
          <Route path="/trainee/add/" element={<TraineesAddPage />}></Route>
          <Route path="/trainee/edit/:id" element={<TraineesEditPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
